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
  findGolfClub: function(userData) {
    return axios.get("/api/golfclub", {
      params: userData
    });
  },
  getGolfClubs: function() {
    return axios.get("/api/golfclub/all");
  }
};