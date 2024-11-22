const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: Boolean, default: true },
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
