import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.MONGO_DB_URL;

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Hello"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  mongoose.connect(DB_URL, () => {
    console.log("MongoDB Connected");
  });
});
