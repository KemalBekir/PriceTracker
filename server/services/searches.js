const puppeteer = require("puppeteer");
const Price = require("../models/price");
const Searches = require("../models/searches");
const mapErrors = require("../utils/mappers");

const targetWebsites = {
  "amazon.co.uk": scrapeAmazon,
}; //TODO - add more websites

async function getAll() {
  return Searches.find({});
}

async function getLatest() {
  return Searches.find({}).sort({ createdAt: "desc" });
}

async function getAllByOwner(owner) {
  return Searches.find({ owner });
}

async function getById(id) {
  return Searches.findById(id).populate({
    path: "owner",
    select: ["email", "username"],
  });
}

async function scrape(url, domain) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url);

  const scrapingFunction = targetWebsites[domain];
  await browser.close();
  return scrapingFunction;
}

async function scrapeAmazon(url) {
  let productName = document.getElementById("productTitle").textContent;
  let price = document.querySelector(".a-offscreen").textContent.substring(1);

  let result = await Searches.findOne({ url });

  if (!result) {
    result = new Searches({
      url,
      itemName: productName,
    });
  }

  const newPrice = new Price({
    price,
  });

  const savedPrice = await newPrice.save();

  result.prices.push(savedPrice);
  await result.save();

  return result;
}

module.exports = {
  scrape,
  getById,
  getAll,
  getAllByOwner,
  getLatest,
};
