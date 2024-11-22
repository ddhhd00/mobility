const express = require("express");
const Reservation = require("../models/Reservation");
const router = express.Router();

// 예약 추가
router.post("/", async (req, res) => {
  const { userId, vehicleId } = req.body;

  try {
    const newReservation = new Reservation({ userId, vehicleId });
    await newReservation.save();
    res.status(201).json({ message: "Reservation created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to create reservation" });
  }
});

// 모든 예약 가져오기
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("userId vehicleId");
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
