// backend/routes/account.js
const express = require("express");
const { authMiddleware } = require("../middleware");
const { Blood } = require("../db");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/available", authMiddleware, async (req, res) => {
  const bloodinfo = await Blood.find({});
  
  res.json({
    bloodinfo: bloodinfo,
  });
});

router.post("/recieved", authMiddleware, async (req, res) => {
  const bloodType = req.body.bloodType;
  const filter = { bloodId: 1 };
  const bloodinfo = await Blood.find({});

  switch (bloodType) {
    case "A_positive":
      if(bloodinfo.A_positive == 0){
        return res.status(404).json({
          "message": "not available"
        })
      }
      const bloodinfo1 = await Blood.findOneAndUpdate(filter, {
        A_positive: -1,
      });
      break;
    case "A_negative":
      if(bloodinfo.A_negative == 0){
        return res.status(404).json({
          "message": "not available"
        })
      }
      const bloodinfo2 = await Blood.findOneAndUpdate(filter, {
        A_negative: -1,
      });
      break;
    case "B_positive":
      if(bloodinfo.B_positive == 0){
        return res.status(404).json({
          "message": "not available"
        })
      }
      const bloodinfo3 = await Blood.findOneAndUpdate(filter, {
        B_positive: -1,
      });
      break;
    case "B_negative":
      if(bloodinfo.B_negative == 0){
        return res.status(404).json({
          "message": "not available"
        })
      }
      const bloodinfo4 = await Blood.findOneAndUpdate(filter, {
        B_negative: -1,
      });
      break;
    case "O_positive":
      if(bloodinfo.O_positive == 0){
        return res.status(404).json({
          "message": "not available"
        })
      }
      const bloodinfo5 = await Blood.findOneAndUpdate(filter, {
        O_positive: -1,
      });
      break;
    case "O_negative":
      if(bloodinfo.O_negative == 0){
        return res.status(404).json({
          "message": "not available"
        })
      }
      const bloodinfo6 = await Blood.findOneAndUpdate(filter, {
        O_negative: -1,
      });
      break;
    case "AB_positive":
      if(bloodinfo.AB_positive == 0){
        return res.status(404).json({
          "message": "not available"
        })
      }
      const bloodinfo7 = await Blood.findOneAndUpdate(filter, {
        AB_positive: -1,
      });
      break;
    case "AB_negative":
      if(bloodinfo.AB_negative == 0){
        return res.status(404).json({
          "message": "not available"
        })
      }
      const bloodinfo8 = await Blood.findOneAndUpdate(filter, {
        AB_negative: -1,
      });
      break;
  }
  res.json({
    message: "Blood is successfully booked",
  });
});

router.post("/donated", authMiddleware, async (req, res) => {
  const bloodType = req.body.bloodType;
  const filter = { bloodId: 1 };
  


  switch (bloodType) {
    case "A_positive":
      const bloodinfo1 = await Blood.findOneAndUpdate(filter, {
        A_positive: +1,
      });
      break;
    case "A_negative":
      const bloodinfo2 = await Blood.findOneAndUpdate(filter, {
        A_negative: +1,
      });
      break;
    case "B_positive":
      const bloodinfo3 = await Blood.findOneAndUpdate(filter, {
        B_positive: +1,
      });
      break;
    case "B_negative":
      const bloodinfo4 = await Blood.findOneAndUpdate(filter, {
        B_negative: +1,
      });
      break;
    case "O_positive":
      const bloodinfo5 = await Blood.findOneAndUpdate(filter, {
        O_positive: +1,
      });
      break;
    case "O_negative":
      const bloodinfo6 = await Blood.findOneAndUpdate(filter, {
        O_negative: +1,
      });
      break;
    case "AB_positive":
      const bloodinfo7 = await Blood.findOneAndUpdate(filter, {
        AB_positive: +1,
      });
      break;
    case "AB_negative":
      const bloodinfo8 = await Blood.findOneAndUpdate(filter, {
        AB_negative: -1,
      });
      break;
  }

  res.json({
    message: "Blood is successfully donated",
  });
});

module.exports = router;
