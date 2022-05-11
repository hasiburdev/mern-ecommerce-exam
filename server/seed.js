import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "./models/dbModels/userModel.js";
import Product from "./models/dbModels/productModel.js";
import productData from "./data/productData.js";
import userData from "./data/userData.js";

dotenv.config();
// const DB_URL = process.env.MONGO_DB_URL;
const DB_URL = "mongodb://localhost:27017/GreenShop";

const seedUsers = async () => {
  await User.deleteMany({});
  await User.insertMany(userData);
  console.log("Users Created Successfully!");
};
const seedProducts = async () => {
  await Product.deleteMany({});
  await Product.insertMany(productData);
  console.log("Products added successfully!");
};

mongoose.connect(DB_URL, async () => {
  console.log("DB Connected!");
  await seedProducts();
  await seedUsers();
});
