import express from "express";
import userModel from "../models/dbModels/userModel.js";
const router = express.Router();

router.get("/", (req, res) => {
  userModel.find({},(err,userInfo)=>{
    if(userInfo.length>0){
      res.status(201).json({
        msg:"All users information",
        userInfo
      })
    }
    else{
      res.status(401).json({
        err
      })
    }
  })
});


router.post("/", (req, res) => {
  res.send("Post");
});
router.put("/:id", (req, res) => {});

export default router;
