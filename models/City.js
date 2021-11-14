const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
  Code_commune_INSEE: {
    type: Number,
    required: true,
  },
  Nom_commune: {
    type: String,
    required: true,
  },
  Code_postal: {
    type: Number,
    required: true,
  },
  Libelle_acheminement: {
    type: String,
    required: true,
  },
  Ligne_5: {
    type: String,
    required: true,
  },
  coordonnees_gps: {
    type: String,
    required: true,
  },
});

module.exports = City = mongoose.model("cities", CitySchema);
