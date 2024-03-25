const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGO_URL;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected Successfully..!!");
    app.listen(PORT, () => {
      console.log(`Server Is Running On Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error Connecting to DB:", error);
  });

app.use("/api", route);
