const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const blogRoutes = require("./src/routes/blog.routes");

require("dotenv").config();

// middleware
app.use(express.json());

//Use Routes
app.use("/blogs", blogRoutes);

async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // console.log(process.env.MONGO_URL);
    console.log("Connection Successfully MongoDB");

    // All APIs
    app.get("/", (req, res) => {
      res.send("Hello blog server");
    });
  } catch (err) {
    console.log(err);
    console.log("Connection MongoDB Failed");
  }
}

ConnectDB();

app.listen(port, () => {
  console.log(`Running server is port ${port}`);
});
