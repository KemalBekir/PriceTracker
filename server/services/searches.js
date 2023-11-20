const puppeteer = require("puppeteer");
const Price = require("../models/price");
const Searches = require("../models/searches");
const mapErrors = require("../utils/mappers");
const userAgent = require("user-agents");
const targetWebsites = {
  "amazon.co.uk": scrapeAmazon,
  // TODO - Add more websites and their corresponding scraping functions
};

async function getAll() {
  return Searches.find({}).populate({
    path: "prices",
    select: ["price", "createdAt"],
  });
}

async function getLatest() {
  return Searches.find({}).sort({ createdAt: "desc" });
}

async function getAllByOwner(owner) {
  return Searches.find({ owner });
}

async function getById(id) {
  return Searches.findById(id).populate({
    path: "prices",
    select: ["price", "createdAt"],
  });
}

async function deleteById(id) {
  await Searches.findByIdAndDelete(id);
}

async function scrape(url, domain) {
  const browser = await puppeteer.launch({ headless: "new" });
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   slowMo: 250, // Adjust the value as needed
  // });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.setUserAgent(userAgent.random().toString());

  await page.goto(url);
  // await page.screenshot({ path: path.join(__dirname, 'Screenshots', 'screenshot.png') });
  // await page.waitForSelector("#sp-cc-accept");
  // await page.click("#sp-cc-accept");

  const scrapingFunction = targetWebsites[domain];
  const result = await scrapingFunction(page, url, domain); // Pass the 'page' and 'url' to the scraping function
  await browser.close();

  return result;
}

async function scrapeAmazon(page, url, domain) {
  const productName = await page.evaluate(() => {
    const productTitleElement = document.querySelector("#title");
    return productTitleElement ? productTitleElement.textContent.trim() : "";
  });

  const wholePriceElement = await page.$(".a-price-whole");
  const fractionPriceElement = await page.$(".a-price-fraction");

  // Get the text content of the whole and fraction parts
  const wholePrice = await (
    await wholePriceElement.getProperty("textContent")
  ).jsonValue();

  const fractionPrice = await (
    await fractionPriceElement.getProperty("textContent")
  ).jsonValue();

  // Combine the whole and fraction parts into a single price string
  const priceString = wholePrice + fractionPrice;

  // Convert the price string into a floating-point number
  const formattedPrice = parseFloat(priceString.replace(/,/g, ""));

  await page.waitForSelector(".a-dynamic-image");
  await page.click(".a-dynamic-image");

  // Wait for the image with class "fullscreen" to appear after the click
  await page.waitForSelector(".fullscreen");

  // Get the src attribute of the image
  const imgSrc = await page.evaluate(() => {
    const imgElement = document.querySelector(".fullscreen");
    return imgElement ? imgElement.getAttribute("src") : null;
  });

  const result = await createOrUpdateSearches(
    url,
    domain,
    productName,
    formattedPrice,
    imgSrc
  );

  return result;
}

async function createOrUpdateSearches(
  url,
  domain,
  productName,
  formattedPrice,
  img
) {
  let result = await Searches.findOne({ url });
  if (!result) {
    result = new Searches({
      url,
      domain,
      itemName: productName,
      img,
    });
  }

  const newPrice = new Price({
    price: formattedPrice,
  });
  const savedPrice = await newPrice.save();

  result.prices.push(savedPrice);
  await result.save();

  return result;
}

async function getDailyPrice() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    const data = await Searches.find({}).populate({
      path: "prices",
      select: ["price", "createdAt"],
    });

    for (const item of data) {
      await page.goto(item.url);
      await scrapeAmazon(page, item.url, item.domain);

      // Add a fixed delay between requests (e.g., 5 seconds)
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    console.log("Finished scraping all items.");
  } catch (error) {
    console.error(error);
  } finally {
    // Close the browser after all scraping operations are done
    await browser.close();
  }
}

module.exports = {
  scrape,
  getById,
  getAll,
  getAllByOwner,
  getLatest,
  deleteById,
  getDailyPrice,
};
