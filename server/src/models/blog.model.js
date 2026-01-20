const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: authSchema, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  // {
  //   timestamps: true,
  // },
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
