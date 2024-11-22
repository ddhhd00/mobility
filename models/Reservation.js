const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
  reservationTime: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
