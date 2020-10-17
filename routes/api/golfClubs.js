const router = require('express').Router();
const golfClubsController = require('../../controllers/golfClubsController');

// Express then matches the final portion of the route to one of the below

// Matches with "/api/golfclub"
router.route('/')
  // GET request for returning all golf clubs based on the county the user has searched for
  .get(golfClubsController.findByCounty);

// Matches with "/api/golfclub/all"
router.route('/all')
  // GET request to return all golf clubs
  .get(golfClubsController.findAll);

module.exports = router;
