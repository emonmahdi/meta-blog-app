const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

require("dotenv").config();

async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // console.log(process.env.MONGO_URL);
    console.log("Connection Successfully MongoDB");
  } catch (err) {
    console.log(err);
    console.log("Connection MongoDB Failed");
  }
}

ConnectDB();

app.get("/", (req, res) => {
  res.send("Hello blog server");
});

app.listen(port, () => {
  console.log(`Running server is port ${port}`);
});
