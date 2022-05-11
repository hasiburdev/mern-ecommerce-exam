import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";

dotenv.config();

const PORT = process.env.PORT;
// const DB_URL = process.env.MONGO_DB_URL;
const DB_URL = "mongodb://localhost:27017/GreenShop";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  mongoose.connect(DB_URL, () => {
    console.log("MongoDB Connected");
  });
});
