const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GolfclubSchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  created_by: {
    type: String
  },
  name: {
    type: String,
    required: "Enter the golf club name"
  },
  address: {
    type: String,
    required: "Enter the golf club address"
  },
  town: {
    type: String,
    required: "Enter the golf club town"
  },
  county: {
    type: String,
    required: "Enter the golf club town"
  },
  postcode: {
    type: String,
    required: "Enter the golf club town"
  },
  num_holes: {
    type: Number,
    required: "Enter the golf course number of holes"
  },
  par: {
    type: Number,
    required: "Enter the golf course par"
  },
  length: {
    type: Number,
    required: "Enter the golf course length"
  },
  members: {
    type: Number,
    required: "Enter the golf course membership amount"
  },
  green_fees_summer: {
    type: Number,
    required: "Enter the golf club summer green fee charge"
  },
  membership_full_men: {
    type: Number,
    required: "Enter the golf club mens full membership charge"
  }
});

const Golfclub = mongoose.model("Golfclub", GolfclubSchema);

module.exports = Golfclub;