// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const passport = require("./config/passport");
require('dotenv').config();

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/golferschoice",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Express navigates to the routes folder and uses the index file
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});