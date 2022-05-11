import { hashPassword } from "../utils/encrypt.js";

const data = [
  {
    name: "Abc Def",
    email: "abc@gmail.com",
    hashedPassword: hashPassword("abc123"),
  },
];

export default data;
