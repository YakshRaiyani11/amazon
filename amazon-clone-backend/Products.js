// //Products.js
// const mongoose = require("mongoose");

// const ProductSchema = mongoose.Schema({
//   title: String,
//   imageURL: String,
//   price: Number,
//   rating: Number,
// });

// module.exports = mongoose.model("products", ProductSchema);

const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  title: String,
  imageURL: String,
  price: Number,
  rating: Number,
});

const Product = mongoose.model('Product', ProductSchema); // Note: 'Product' should be used instead of 'products'

module.exports = Product;

