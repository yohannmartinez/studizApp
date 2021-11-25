const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
  townCodeInsee: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
  nameComplement: {
    type: String,
    required: true,
  },
  subName: {
    type: String,
    required: true,
  },
  gpsCoordinates: {
    type: String,
    required: true,
  },
});

module.exports = City = mongoose.model("cities", CitySchema);
