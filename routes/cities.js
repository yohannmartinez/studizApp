const express = require("express");
const router = express.Router();

// Load models
const City = require("../models/City");

// @route GET api/cities/getCities
// @desc get cities array with a given search value
// @access Public
router.get("/getCities", (req, res) => {
  City.find({ Libelle_acheminement: { "$regex": req.query.search_value, "$options": "i" } }, function (err, cities) {
    if (cities) {
      res.status(200).send({ cities: cities });
    } else if (!user) {
      res.status(200).send({ cities: [] });
    }
  });
});

module.exports = router;
