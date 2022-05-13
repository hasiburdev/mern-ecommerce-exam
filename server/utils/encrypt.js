
import { randomBytes, scryptSync } from "crypto";

const encryptPassowrd = (password, salt) => {
  return scryptSync(password, salt, 32).toString("hex");
};

export const hashPassword = (password) => {
  const salt = randomBytes(16).toString("hex");
  return encryptPassowrd(password, salt) + salt;
};

export const matchPassword = (passowrd, hash) => {
  const salt = hash.slice(64);
  const originalPassHash = hash.slice(0, 64);
  const currentPassHash = encryptPassowrd(passowrd, salt);
  return originalPassHash === currentPassHash;
};