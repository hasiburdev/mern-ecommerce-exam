import mongoose from "mongoose";

import User from "./models/dbModels/userModel.js";

mongoose.connect(
  "mongodb+srv://hasib:hasib@cluster0.em0mf.mongodb.net/mernEcommerceTest?retryWrites=true&w=majority",
  async () => {
    const user = new User({
      name: "Hasib",
      password: "123456",
      email: "hasib@gamil.com",
    });
    const response = await user.save();
    console.log(response);
  }
);
