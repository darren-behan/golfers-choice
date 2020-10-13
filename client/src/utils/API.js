import axios from "axios";

// In each function, we use axios to send our api route request to the server

export default {
  // Create a user
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Logs in a user
  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  // Updates the user with the given id
  updateUser: function(userData) {
    return axios.put("/api/users/" + userData.id, {
      params: userData
    });
  },
  // Deletes the user with the given id
  deleteUser: function(userData) {
    return axios.delete("/api/users/" + userData.id, {
      params: userData
    });
  },
  // Saves the golf club to the user
  favoriteGolfClub: function(userData) {
    return axios.put("/api/users/favorites/" + userData.loggedInUserId, {
      params: userData
    });
  },
  // Finds golf clubs in the county the user searched for
  findGolfClub: function(userData) {
    return axios.get("/api/golfclub", {
      params: userData
    });
  },
  // Returns all golf clubs
  getGolfClubs: function() {
    return axios.get("/api/golfclub/all");
  },
  // Returns the weather for the county the user searched for
  retrieveWeather: function(data) {
    return axios.get("/api/weather/" + data.county, {
      params: data
    })
  }
};