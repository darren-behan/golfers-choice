const router = require('express').Router();
const userRoutes = require('./users');
const golfClubRoutes = require('./golfClubs');
const weatherRoutes = require('./weather');

// If the second portion of the route contains /users,
// Express navigates to the users.js file within this directory
router.use('/users', userRoutes);
// Golf Club routes
router.use('/golfclub', golfClubRoutes);
// Weather API route
router.use('/weather', weatherRoutes);

module.exports = router;
