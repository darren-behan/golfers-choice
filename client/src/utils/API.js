import axios from "axios";

// In each function, we use axios to send our api route request to the server

export default {
  // Create a user
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  }
};