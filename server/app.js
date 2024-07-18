const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const connectDB = require("./config/dbConfig");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

module.exports = app;
