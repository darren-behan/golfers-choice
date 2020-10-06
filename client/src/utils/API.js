import axios from "axios";

// In each function, we use axios to send our api route request to the server

export default {
  // Create a user
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  // Gets the book with the given id
  updateUser: function(userData) {
    return axios.put("/api/users/" + userData.id, {
      params: userData
    });
  },
  findGolfClub: function(userData) {
    return axios.get("/api/golfclub", {
      params: userData
    });
  },
  getGolfClubs: function() {
    return axios.get("/api/golfclub/all");
  }
};