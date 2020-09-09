// Dependencies
const path = require("path");

// Routes
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // user signup route loads user-signup.html
  app.get("/user-signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-signup.html"));
  });

  // golf club register route loads golf-club-register.html
  app.get("/golf-club-register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/golf-club-register.html"));
  });
};