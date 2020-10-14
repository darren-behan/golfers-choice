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
      .findById({ _id: req.body.params.id })
      .then(user => {
        if (user.validPassword(req.body.params.oldPassword)) {
          user.password = req.body.params.newPassword;
          user.modified_at = new Date();
          user.save(function (err, user) {
            if (err) {
              res.send(err);
            } else {
              const data = getUserDtoFromModel(user);
              res.send(data);
            }
          })
        } else {
          res.status(422).json("invalid password");
        }
      })
      .catch(err => res.status(401).json(err));
      
  },
  updateFavorites: function(req, res) {
    db.User
      .findById({ _id: req.body.params.loggedInUserId })
      .then(dbModel => {
        dbModel.favorites.includes(req.body.params.golfClubId) ? 
        db.User.findOneAndUpdate({ _id: req.body.params.loggedInUserId }, { $pull: { favorites: req.body.params.golfClubId } }, { new: true})
        .then(dbModel => {
          const data = getUserDtoFromModel(dbModel);
          res.json(data);
        })
        .catch(err => res.status(422).json(err))
        :
        db.User.findOneAndUpdate({ _id: req.body.params.loggedInUserId }, { $push: { favorites: req.body.params.golfClubId } }, { new: true })
        .then(dbModel => {
          const data = getUserDtoFromModel(dbModel);
          res.json(data);
        })
        .catch(err => res.status(422).json(err))
      })
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