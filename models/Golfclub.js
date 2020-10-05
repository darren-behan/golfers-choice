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
  description: {
    type: String,
    required: "Enter a description for the golf club"
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
    required: "Enter the golf club county"
  },
  postcode: {
    type: String,
    required: "Enter the golf club postcode"
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
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  modified_by: {
    type: String
  }
});

const Golfclub = mongoose.model("Golfclub", GolfclubSchema);

module.exports = Golfclub;