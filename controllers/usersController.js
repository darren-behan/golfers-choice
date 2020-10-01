// Dependencies
// Requiring our models
const db = require("../models");
const passport = require("../config/passport");

const getUserDtoFromModel = (model) => {
  return {
    firstName: model.first_name,
    lastName: model.last_name,
    userName: model.username,
  }
}

// Defining methods for the usersController
module.exports = {
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => {
        const data = getUserDtoFromModel(dbModel);
        res.json(data);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Using the passport.authenticate middleware with our local strategy.
  login: (passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      firstName: req.user.first_name,
      id: req.user.id
    });
  })
};