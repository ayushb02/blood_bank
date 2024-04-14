// backend/routes/account.js
const express = require("express");
const { authMiddleware } = require("../middleware");
const { Blood } = require("../db");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.post("/available", authMiddleware, async (req, res) => {
  const bloodType = req.body.bloodType;
  let finalinfo;
  if (bloodType == "") {
    const bloodinfo2 = await Blood.find({});
    finalinfo = bloodinfo2;
    res.json({
      finalinfo,
    });
  } else {
    const bloodinfo1 = await Blood.find({ bloodGroup: bloodType });
    finalinfo = bloodinfo1;
    res.json({
      finalinfo,
    });
  }
});

router.post("/recieved", authMiddleware, async (req, res) => {
  const name = req.body.patientName;
  const bloodType = req.body.bloodType;

  const patientname = await Blood.deleteOne({
    bloodDoner: name,
    bloodGroup: bloodType,
  })
  res.json({
    message: "Blood is successfully booked",
  });
});

router.post("/donated", authMiddleware, async (req, res) => {
  const name = req.body.patientName;
  const address = req.body.address;
  const bloodType = req.body.bloodType;

  const newDoner = Blood.create({
    bloodDoner: name,
    bloodGroup: bloodType,
    address: address,
  });

  res.json({
    message: "Blood is successfully donated",
  });
});

module.exports = router;
