const express = require("express");
const Vehicle = require("../models/Vehicle");
const router = express.Router();

// 모든 차량 가져오기
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// 차량 추가
router.post("/", async (req, res) => {
  const { ownerId, type, location } = req.body;

  try {
    const newVehicle = new Vehicle({ ownerId, type, location });
    await newVehicle.save();
    res.status(201).json({ message: "Vehicle added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add vehicle" });
  }
});

module.exports = router;
