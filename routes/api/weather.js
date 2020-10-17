const router = require('express').Router();
const weatherController = require('../../controllers/weatherController');

// Express then matches the final portion of the route to one of the below

// Matches with "/api/weather"
router.route('/:county')
  // GET request for returning the weather for the county the user searched
  .get(weatherController.findByCounty);

module.exports = router;
