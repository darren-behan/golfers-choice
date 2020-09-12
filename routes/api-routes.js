// Dependencies
// Requiring our models
const db = require("../models");
const { User } = require("../models");
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

  // POST route for saving a new user
  app.post("/api/user/signup", ({ body }, res) => {
    db.User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: body.password
    })
    .then(function (dbUser) {
      console.log(dbUser);
      res.json(dbUser);
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

  // POST route for updating an existing user
  app.post("/update/user/:id", (req, res) => {
    db.User.updateOne(
      {
        _id: req.params.id
      },
      {
        $set: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: req.body.password,
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

  // DELETE route for deleting an existing user
  app.delete("/delete/user/:id", (req, res) => {
    db.User.deleteOne(
      {
        _id: req.params.id
      },
      (error) => {
        res.send(error);
      }
    );
  });
};
