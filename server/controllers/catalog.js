const router = require("express").Router();
const api = require("../services/searches");
const mapErrors = require("../utils/mappers");
const { isAuth, isOwner } = require("../middleware/guards");
const preload = require("../middleware/preload");

router.get("/", async (req, res) => {
  const data = await api.getAll();
  res.json(data);
});

router.post("/scrape", async (req, res) => {
  const url = req.body.url;
  const domain = req.body.domain;

  try {
    const result = await api.scrape(url, domain);
    res.status(201).json(result);
  } catch (err) {
    const error = mapErrors(err);
    console.error(err.message);
    res.status(400).json({ message: error });
  }
});

router.get("/:id", preload(), (req, res) => {
  const data = res.locals.item;
  res.json(data);
});

router.delete("/:id", preload(), isOwner(), async (req, res) => {
  try {
    const itemId = req.params.id;
    await api.deleteById(itemId);
  } catch (err) {}
});

router.get("/mySearches", isAuth(), async (req, res) => {
  const data = await api.getAllByOwner(req.user._id);
  res.json(data);
});

module.exports = router;
