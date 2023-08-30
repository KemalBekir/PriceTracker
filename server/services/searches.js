const puppeteer = require("puppeteer");
const Price = require("../models/price");
const Searches = require("../models/searches");
const mapErrors = require("../utils/mappers");

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
  const page = await browser.newPage();

  await page.goto(url);

  const scrapingFunction = targetWebsites[domain];
  const result = await scrapingFunction(page, url, domain); // Pass the 'page' and 'url' to the scraping function
  await browser.close();

  return result;
}

async function scrapeAmazon(page, url, domain) {
  const productName = await page.evaluate(() => {
    const productTitleElement = document.querySelector("#productTitle");
    if (productTitleElement) {
      return productTitleElement.textContent.trim();
    } else {
      return ""; // or some default value if the element is not found
    }
  });

  const priceElement = await page.$(".a-price .a-offscreen");
  const price = await (
    await priceElement.getProperty("textContent")
  ).jsonValue();

  const formattedPrice = parseFloat(price.replace(/,/g, "").substring(1));
  const imgElement = await page.$(".a-dynamic-image");
  const img = await (await imgElement.getProperty("src")).jsonValue();

  const result = await createOrUpdateSearches(
    url,
    domain,
    productName,
    formattedPrice,
    img
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
  try {
    const data = await Searches.find({})
      .populate({
        path: "prices",
        select: ["price", "createdAt"],
      })
      .lean();
    for (const item of data) {
      const browser = await puppeteer.launch({ headless: "new" });
      const page = await browser.newPage();
      await page.goto(item.url);
      await scrapeAmazon(page, item.url, item.domain);
      await browser.close();
    }
    // console.log('Finished');
  } catch (error) {
    console.error(error);
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
