const cron = require("node-cron");
const { getDailyPrice } = require("./services/searches");

const dailyScrape = () => {};

cron.schedule("0 */23 * * *", getDailyPrice);

module.exports = dailyScrape;
