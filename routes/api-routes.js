// Dependencies
// Requiring our models
const db = require("../models");
// Routes
module.exports = function (app) {
  // GET route for getting golf club data when USER searches for specific golf club
  app.get("/api/golfclub/:name"), async({ body }, res) => {
    // Find the relevant Golf Club by it's name
    db.Golfclub.findOne({
      name: body.name
    })
    .then(dbGolfClub => {
      console.log(dbGolfClub);
      res.json(dbGolfClub);
    })
    .catch(({ message }) => {
      console.log(message);
    });
  }


  // POST route for saving a new golf club
  app.post("/api/golfclub", function (req, res) {
    db.Golfclub.create({
      created_by: req.body.created_by,
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
