import { hashPassword } from "../utils/encrypt.js";

const data = [
  {
    email: "abc@gmail.com",
    hashedPassword: hashPassword("abc123"),
  },
];

export default data;
