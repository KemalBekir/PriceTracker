const { getById } = require("../services/searches");

module.exports = () => async (req, res, next) => {
  const id = req.params.id;
  try {
    const item = await getById(id);
    item._ownerId = item.owner;
    res.locals.item = item;
    next();
  } catch (error) {
    res.status(404).json({ message: "Record not found" });
  }
};
