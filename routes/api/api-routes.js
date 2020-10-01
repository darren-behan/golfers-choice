// Dependencies
// Requiring our models
const db = require("../../models");
const passport = require("../../config/passport");
// Routes
module.exports = function (app) {
  // GET route for getting all golf clubs
  app.get("/api/golfclub", ({ body }, res) => {
    // Find all golf clubs
    db.Golfclub.find({})
    .then(dbGolfClub => {
      console.log(dbGolfClub);
      res.json(dbGolfClub);
    })
    .catch(({ message }) => {
      console.log(message);
    });
  });

  // GET route for getting golf club data when USER searches for specific golf club
  app.get("/api/golfclub/:name", (req, res) => {
    // Find the relevant Golf Club by it's name
    db.Golfclub.findOne({
      name: req.params.name
    })
    .then(dbGolfClub => {
      console.log(dbGolfClub);
      res.json(dbGolfClub);
    })
    .catch(({ message }) => {
      console.log(message);
    });
  });

  // GET route for getting all golf clubs by location
  app.get("/api/golfclub/:county", (req, res) => {
    // Find all golf clubs by location
    db.Golfclub.findOne({
      county: req.params.county
    })
    .then(dbGolfClub => {
      console.log(dbGolfClub);
      res.json(dbGolfClub);
    })
    .catch(({ message }) => {
      console.log(message);
    });
  });

  // POST route for saving a new golf club
  app.post("/api/golfclub/register", (req, res) => {
    db.Golfclub.create({
      created_by: req.params.id,
      name: req.body.name,
      address: req.body.address,
      town: req.body.town,
      county: req.body.county,
      postcode: req.body.postcode,
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

  // POST route for updating an existing golf club
  app.post("/update/golfclub/:id", (req, res) => {
    db.Golfclub.updateOne(
      {
        _id: req.params.id
      },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          town: req.body.town,
          county: req.body.county,
          postcode: req.body.postcode,
          num_holes: req.body.num_holes,
          par: req.body.par,
          length: req.body.length,
          members: req.body.members,
          green_fees_summer: req.body.green_fees_summer,
          membership_full_men: req.body.membership_full_men,
          modified_at: Date.now(),
          modified_by: req.params.id
        }
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });

  // POST request for logging in a user.
  // Using the passport.authenticate middleware with our local strategy.
  app.post("/api/user/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // GET route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // GET route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
