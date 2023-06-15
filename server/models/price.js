const {
  model,
  Schema,
  Type: { ObjectId },
} = require("mongoose");

const priceSchema = new Schema(
  {
    price: {
      type: Number,
      min: [0, "Price cannot be a negative number"],
    },
    search: { type: ObjectId, ref: "Searches", required: true },    
  },
  { timestamps: true }
);

const Price = model("PriceHistory", priceSchema);

module.exports = Price;
