const express = require('express');
const mongoose = require('mongoose');
const app = express();

// This is your secret link!
const mongoURI = "mongodb+srv://amigo_admin:R01915724014r%23@amigodb.ibnorxt.mongodb.net/?appName=AmigoDB";

// Tell the Manager to connect to the Storage Room
mongoose.connect(mongoURI)
  .then(() => console.log("✅ Success! Amigo Bangladesh is connected to MongoDB!"))
  .catch(err => console.log("❌ Oh no, an error happened:", err));

app.get('/', (req, res) => {
  res.send("The Amigo Bangladesh Server is Running!");
});

app.listen(5000, () => {
  console.log("Server is awake on port 5000");
});

const Product = require('./Product'); // Import our form

// This function saves a T-shirt to Amigo's database
async function addFirstProduct() {
  const newItem = new Product({
    name: "Amigo Classic Blue T-Shirt",
    price: 1200,
    category: "T-Shirt",
    inStock: true
  });

  await newItem.save();
  console.log("👕 Success! The Blue T-Shirt is now in the database!");
}

// Call the function after we connect
mongoose.connection.once('open', () => {
  addFirstProduct();
});