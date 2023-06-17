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
    
});

router.get("/mySearches", isAuth(), async (req, res) => {
  const data = await api.getAllByOwner(req.user._id);
  res.json(data);
});
