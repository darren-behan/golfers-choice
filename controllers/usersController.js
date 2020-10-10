// Dependencies
// Requiring our models
const db = require("../models");

const getUserDtoFromModel = (model) => {
  return {
    id: model._id,
    firstName: model.first_name,
    lastName: model.last_name,
    email: model.email,
    favorites: model.favorites
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
      .findByIdAndUpdate(req.body.params.id, req.body.params, function (err, user) {
        if (err) {
          return next(err);
        } else {
          user.password = req.body.params.newPassword;
          user.modified_at = new Date();
          user.save(function (err, user) {
            if (err) {
              res.send("Error: ", err);
            } else {
              res.send(user);
            }
          })
        }
      })
  },
  updateFavorites: function(req, res) {
    console.log(req.body)
    db.User
      .findOneAndUpdate({ _id: req.body.params.loggedInUserId }, { $push: { favorites: req.body.params.golfClubId } }, { new: true })
      .then(dbModel => {
        const data = getUserDtoFromModel(dbModel);
        res.json(data);
      })
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
      id: req.user.id,
      favorites: req.user.favorites
    });
  }
};