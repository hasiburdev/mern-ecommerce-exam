import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User Get");
});
router.post("/", (req, res) => {
  res.send("Post");
});
router.put("/:id", (req, res) => {});

export default router;
