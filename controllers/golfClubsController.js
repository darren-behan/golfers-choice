// Dependencies
// Requiring our models
const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findByCounty: function(req, res) {
    db.GolfClub
      .find({ county: req.query.county })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.GolfClub
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};