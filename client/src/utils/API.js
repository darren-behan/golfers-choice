import axios from "axios";

export default {
  // Create a user
  createUser: function(userData) {
    console.log(userData);
    return axios.post("/api/users", userData);
  }
};