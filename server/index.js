const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cron = require("node-cron");
const { getDailyPrice } = require("./services/searches");

const cors = require("./middleware/cors");
const auth = require("./middleware/auth");
const catalogController = require("./controllers/catalog");
const usersController = require("./controllers/users");
dotenv.config({ path: __dirname + "/.env" });
// dotenv.config();
const PORT = process.env.PORT || 5000;

start();

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
    console.error("Database conection failed");
  }

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
  });

  mongoose.connection.on("connected", () => {
    console.log("mongoDB connected");
  });
  cron.schedule("20 18 * * *", () => {
    getDailyPrice().catch((error) => {
      console.error("Unhandled promise", error);
    });
    console.log('Cron job is running');
  });

  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(auth());
  app.use("/catalog", catalogController);
  app.use("/users", usersController);

  app.get("/", (req, res) => {
    res.json({ message: "REST service operational" });
  });

  app.listen(PORT, () => console.log(`REST service started on ${PORT}`));
}
