// Dependencies
// Requiring our Golfclub model
const db = require("../models");
// Routes
module.exports = function (app) {
  // POST route for saving a new golf club
  app.post("/api/golfclub", function (req, res) {
    console.log(req.body);
    db.Golfclub.create({
      created_by: "Darren Behan",
      golfclub: [
        {
          name: req.body.name,
          address: req.body.address,
          num_holes: req.body.holes,
          par: req.body.par,
          length: req.body.length,
          members: req.body.members,
          green_fees_summer: req.body.sumGreenFee,
          membership_full_men: req.body.memFee,
        },
      ],
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
