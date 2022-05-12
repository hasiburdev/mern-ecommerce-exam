import User from "../models/dbModels/userModel.js";
import { hashPassword } from "../utils/encrypt.js";

export const getUser = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};
export const createUser = async (email, password) => {
  const userObject = {
    email,
    hashedPassword: hashPassword(password),
  };
  const user = new User(userObject);
  return await user.save();
};
