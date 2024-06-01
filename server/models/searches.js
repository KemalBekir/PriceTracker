const {
  model,
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const searchesSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "Url is required"],
    },
    domain: {
      type: String,
      required: [true, "Domain is required"],
    },
    itemName: {
      type: String,
      required: [true, "Provide name for this item"],
    },
    img: {
      type: String,
    },
    prices: [{ type: ObjectId, ref: "PriceHistory" }],
    owner: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Searches = model("Searches", searchesSchema);

module.exports = Searches;
