// Dependencies
// Requiring our models
const db = require('../models');

const getUserDtoFromModel = (model) => ({
  id: model._id, // eslint-disable-line
  firstName: model.first_name,
  lastName: model.last_name,
  email: model.email,
  favorites: model.favorites,
});

// Defining methods for the usersController
module.exports = {
  create(req, res) {
    db.User
      .create(req.body)
      .then((dbModel) => {
        const data = getUserDtoFromModel(dbModel);
        res.json(data);
      })
      .catch((err) => res.status(422).json(err));
  },
  update(req, res) {
    db.User
      .findById({ _id: req.body.params.id })
      .then((user) => {
        if (user.validPassword(req.body.params.oldPassword)) {
          /*eslint-disable */
          user.password = req.body.params.newPassword;
          user.modified_at = new Date();
          user.save((err, user) => {
            if (err) {
              res.send(err);
            } else {
              const data = getUserDtoFromModel(user);
              res.send(data);
            }
          });
        } else {
          res.status(422).json('invalid password');
        }
      })
      .catch((err) => res.status(401).json(err));
  },
  /* eslint-enable */
  updateFavorites(req, res) {
    db.User
      .findById({ _id: req.body.params.loggedInUserId })
      .then((dbModel) => {
        /*eslint-disable */
        dbModel.favorites.includes(req.body.params.golfClubId)
          ? db.User.findOneAndUpdate({ _id: req.body.params.loggedInUserId },
            { $pull: { favorites: req.body.params.golfClubId } },
            { new: true })
            .then((model) => {
              const data = getUserDtoFromModel(model);
              res.json(data);
            })
            .catch((err) => res.status(422).json(err))
          : db.User.findOneAndUpdate({ _id: req.body.params.loggedInUserId },
            { $push: { favorites: req.body.params.golfClubId } },
            { new: true })
            .then((dbData) => {
              const data = getUserDtoFromModel(dbData);
              res.json(data);
            })
            .catch((err) => res.status(422).json(err));
      });
  },
  /* eslint-enable */
  remove(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // Using the passport.authenticate middleware with our local strategy.
  login: (req, res) => {
    res.json({
      email: req.user.email,
      firstName: req.user.first_name,
      id: req.user.id,
      favorites: req.user.favorites,
    });
  },
};
