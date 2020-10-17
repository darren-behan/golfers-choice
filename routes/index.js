// Dependencies
const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

// If the route begins with /api, Express navigates to the api
// folder within this directory and uses the index file
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
