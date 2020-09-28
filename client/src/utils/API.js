import axios from "axios";

export default {
  // Gets all users
  getBooks: function() {
    return axios.get("/api/user_data");
  },
  // Save a user on creation 
  saveUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  }
};