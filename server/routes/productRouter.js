import express from "express";
import {
  getAllProducts,
  getProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:slug", getProduct);
router.post("/", (req, res) => res.send("Post"));
router.put("/:id", (req, res) => res.send("Put"));

export default router;
