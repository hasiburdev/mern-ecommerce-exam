import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import User from "./models/dbModels/userModel.js";
const DB_URL = process.env.MONGO_DB_URL;

mongoose.connect(DB_URL, async () => {
  const user = new User({
    name: "Hasib",
    password: "123456",
    email: "hasib@gamil.com",
  });
  const response = await user.save();
  console.log(response);
});
