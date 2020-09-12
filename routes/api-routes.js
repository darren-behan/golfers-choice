// Dependencies
// Requiring our models
const db = require("../models");
const { User } = require("../models");
// Routes
module.exports = function (app) {
  // GET route for getting all golf clubs
  app.get("/api/golfclub", async({ body }, res) => {
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
  app.get("/api/golfclub/:name", async({ body }, res) => {
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
  });

  // GET route for getting all golf clubs by location
  app.get("/api/golfclub/:county", async({ body }, res) => {
    console.log("line 36");
    console.log(body);
    // Find all golf clubs by location
    db.Golfclub.find({
      county: body.county
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
  app.post("/api/golfclub", async({ body }, res) => {
    db.Golfclub.create({
      created_by: body.created_by,
      name: body.name,
      address: body.address,
      town: body.town,
      county: body.county,
      postcode: body.postcode,
      num_holes: body.num_holes,
      par: body.par,
      length: body.length,
      members: body.members,
      green_fees_summer: body.green_fees_summer,
      membership_full_men: body.membership_full_men
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
  app.post("/api/user/signup", async({ body }, res) => {
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
  app.post("/update/golfclub/:name", async({ body }, res) => {
    db.Golfclub.updateOne(
      {
        name: body.name // how do I get this to be the id of the golf club
      },
      {
        $set: {
          name: body.name,
          address: body.address,
          town: body.town,
          county: body.county,
          postcode: body.postcode,
          num_holes: body.num_holes,
          par: body.par,
          length: body.length,
          members: body.members,
          green_fees_summer: body.green_fees_summer,
          membership_full_men: body.membership_full_men,
          modified_at: Date.now(),
          modified_by: body.modified_by // how do I get this to be the id of the signed in user
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
  app.post("/update/user/:email", async({ body }, res) => {
    db.User.updateOne(
      {
        email: body.email // how do I get this to be the id of the signed in user
      },
      {
        $set: {
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          password: body.password,
          modified_at: Date.now(),
          modified_by: body.email // how do I get this to be the id of the signed in user
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
