import { hashPassword } from "../utils/encrypt.js";

const data = [
  {
    name: "Abc Def",
    email: "abc@gmail.com",
    hashedPassword: hashPassword("abc123"),
  },
  {
    name: "Muntasir",
    email: "muntasir@gmail.com",
    hashedPassword: hashPassword("muntasir"),
  },
];

export default data;
