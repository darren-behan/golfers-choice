// Dependencies
// Requiring our models
const db = require("../models");
// Routes
module.exports = function (app) {
  // POST route for saving a new golf club
  app.post("/api/golfclub", function (req, res) {
    db.Golfclub.create({
      created_by: "Darren Behan",
      name: req.body.name,
      address: req.body.address,
      num_holes: req.body.num_holes,
      par: req.body.par,
      length: req.body.length,
      members: req.body.members,
      green_fees_summer: req.body.green_fees_summer,
      membership_full_men: req.body.membership_full_men
    })
      .then(function (dbGolfClub) {
        console.log(dbGolfClub);
        res.json(dbGolfClub);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });
};
