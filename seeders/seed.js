let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/golferschoice", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, 
  useFindAndModify: false
});

let golfClubSeed = [
  {
    created_at: new Date().setDate(new Date().getDate()),
    created_by: "Darren Behan",
    golfclub: [
      {
        name: "Newbridge Golf Club",
        address: "Barrettstown Rd, Newbridge, Kildare, Ireland",
        num_holes: 18,
        par: 72,
        length: 6547,
        members: 420,
        green_fees_summer: 28,
        membership_full_men: 809
      }
    ]
  }
];

db.Golfclub.deleteMany({})
  .then(() => db.Golfclub.collection.insertMany(golfClubSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
