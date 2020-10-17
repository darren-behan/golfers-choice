// Dependencies
// Requiring our models
const db = require('../models');

// Defining methods for the usersController
module.exports = {
  findByCounty(req, res) {
    db.GolfClub
      .find({ county: req.query.county })
      .sort({ name: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAll(req, res) {
    db.GolfClub
      .find(req.query)
      .sort({ name: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
