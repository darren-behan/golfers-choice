// Dependencies
// Requiring our models
const db = require("../models");

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
    const password = req.body.params.newPassword;
    db.User
      .findOneAndUpdate({ _id: req.body.params.id }, { password: password }, {
        new: true
      })
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
  login: (req, res) => {
    res.json({
      email: req.user.email,
      firstName: req.user.first_name,
      id: req.user.id
    });
  }
};