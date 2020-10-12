// Dependencies
const axios = require('axios');

// Defining methods for the usersController
module.exports = {
  findByCounty: function(req, res) {
    console.log(req.params)
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + req.params.county + "&units=metric&appid=" + `${process.env.WEATHER_API_KEY}`)
    .then(
      function(result) {
        console.log(result.data);
        res.json(result.data);
      }
    )
  }
};