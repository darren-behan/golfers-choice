const router = require("express").Router();
const golfClubsController = require("../../controllers/golfClubsController");

// Express then matches the final portion of the route to one of the below

// Matches with "/api/golfclub"
router.route("/")
  // GET request for logging in a user.
  .get(golfClubsController.findByCounty)

module.exports = router;
