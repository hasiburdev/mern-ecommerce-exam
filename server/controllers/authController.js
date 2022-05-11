import { getUser, createUser } from "../controllers/userController.js";
import { matchPassword } from "../utils/encrypt.js";

export const signUpController = async (req, res) => {
  const { email, password } = req.body;
  const userFromDB = await getUser(email);

  if (userFromDB !== null)
    return res.status(409).json({ message: "User already registered!" });

  await createUser(email, password);
  res.status(201).json({ message: "User Created Succesfully!" });
};
export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const userFromDB = await getUser(email);
  const isPasswordMatched = matchPassword(password, userFromDB.hashedPassword);
  console.log(isPasswordMatched);
  if (!isPasswordMatched) {
    res.status(409).json({ message: "Incorrect Password!" });
    return;
  }
  res.status(200).json({ message: "Login Successful!" });
};
