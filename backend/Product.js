const mongoose = require('mongoose');

// This is the "Blank Form" for every clothing item
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  inStock: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);