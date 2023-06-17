const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cors = require("./middleware/cors");
const auth = require("./middleware/auth");
const catalogController = require("./controllers/catalog");
dotenv.config();
const PORT = process.env.PORT || 5000;

start();
console.log();
async function start() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database ready");
  } catch (error) {
    console.log(error.message);
    console.error("Database connection failed");
  }

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
  });

  mongoose.connection.on("connected", () => {
    console.log("mongoDB conntected");
  });

  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(auth());
  app.use("/catalog", catalogController);

  app.get("/", (req, res) => {
    res.json({ message: "REST service operational" });
  });

  const server = app.listen(PORT, () =>
    console.log(`REST service started on ${PORT}`)
  );
}
