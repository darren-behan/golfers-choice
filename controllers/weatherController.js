// Dependencies
const axios = require('axios');

// Defining methods for the usersController
module.exports = {
  findByCounty(req, res) {
    // We use axios to submit our GET request to the OpenWeather API
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.county}, IE` + '&units=metric&appid=' + `${process.env.WEATHER_API_KEY}`)
      .then(
      // Once the request is complete, we run a callback function so our result is passed back to our front end through the response of the API call and in a JSON format
        (result) => {
          res.json(result.data);
        },
      )
      .catch((err) => res.json(err));
  },
};
