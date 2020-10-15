let mongoose = require("mongoose");
let db = require("../models");

// "mongodb://localhost/golferschoice"
mongoose.connect("mongodb+srv://darren-admin:Andrew1312@cluster0.v6e1i.mongodb.net/golferschoice?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, 
  useFindAndModify: false
});

let golfClubSeed = [
  {
    created_at: new Date().setDate(new Date().getDate()),
    created_by: "darren behan",
    name: "newbridge golf club",
    description: "Newbridge Golf Club is an 18 hole parkland course just 30 minutes south of Dublin. Affiliated to the GUI in 1997, we now have over 400 members. The course boasts USGA spec. greens and tees. The holes around the turn are particularly challenging, with water features giving the golfer extra to watch out for.",
    address: "newbridge rd",
    town: "newbridge",
    county: "kildare",
    postcode: "w12t34",
    num_holes: 18,
    par: 72,
    length: 6547,
    members: 420,
    green_fees_summer: 28,
    membership_full_men: 809,
    image: "https://cdn.pixabay.com/photo/2016/08/23/00/30/magnolia-golf-course-1613270_1280.jpg",
    modified_at: new Date().setDate(new Date().getDate())
  },
  {
    created_at: new Date().setDate(new Date().getDate()),
    created_by: "darren behan",
    name: "curragh golf club",
    description: "Curragh Golf Club is an 18 hole parkland course just 30 minutes south of Dublin. Affiliated to the GUI in 1997, we now have over 400 members. The course boasts USGA spec. greens and tees. The holes around the turn are particularly challenging, with water features giving the golfer extra to watch out for.",
    address: "curragh rd",
    town: "curragh",
    county: "kildare",
    postcode: "w13t34",
    num_holes: 18,
    par: 72,
    length: 6738,
    members: 470,
    green_fees_summer: 30,
    membership_full_men: 1300,
    image: "https://cdn.pixabay.com/photo/2016/11/14/19/20/golf-course-1824369_1280.jpg",
    modified_at: new Date().setDate(new Date().getDate())
  },
  {
    created_at: new Date().setDate(new Date().getDate()),
    created_by: "darren behan",
    name: "naas golf club",
    description: "Naas Golf Club is an 18 hole parkland course just 30 minutes south of Dublin. Affiliated to the GUI in 1997, we now have over 400 members. The course boasts USGA spec. greens and tees. The holes around the turn are particularly challenging, with water features giving the golfer extra to watch out for.",
    address: "naas rd",
    town: "naas",
    county: "kildare",
    postcode: "w11t34",
    num_holes: 18,
    par: 72,
    length: 6338,
    members: 403,
    green_fees_summer: 35,
    membership_full_men: 1150,
    image: "https://cdn.pixabay.com/photo/2016/10/25/22/29/half-moon-bay-1770186_1280.jpg",
    modified_at: new Date().setDate(new Date().getDate())
  },
  {
    created_at: new Date().setDate(new Date().getDate()),
    created_by: "darren behan",
    name: "cill dara golf club",
    description: "Cill Dara Golf Club is an 18 hole parkland course just 30 minutes south of Dublin. Affiliated to the GUI in 1997, we now have over 400 members. The course boasts USGA spec. greens and tees. The holes around the turn are particularly challenging, with water features giving the golfer extra to watch out for.",
    address: "cill dara rd",
    town: "cill dara",
    county: "kildare",
    postcode: "w19t34",
    num_holes: 18,
    par: 72,
    length: 5932,
    members: 540,
    green_fees_summer: 20,
    membership_full_men: 699,
    image: "https://cdn.pixabay.com/photo/2016/10/25/22/29/half-moon-bay-1770186_1280.jpg",
    modified_at: new Date().setDate(new Date().getDate())
  },
  {
    created_at: new Date().setDate(new Date().getDate()),
    created_by: "darren behan",
    name: "palmerstown golf club",
    description: "Palmerstown Golf Club is an 18 hole parkland course just 30 minutes south of Dublin. Affiliated to the GUI in 1997, we now have over 400 members. The course boasts USGA spec. greens and tees. The holes around the turn are particularly challenging, with water features giving the golfer extra to watch out for.",
    address: "palmerstown rd",
    town: "palmerstown",
    county: "kildare",
    postcode: "w61t34",
    num_holes: 18,
    par: 72,
    length: 6499,
    members: 249,
    green_fees_summer: 40,
    membership_full_men: 899,
    image: "https://cdn.pixabay.com/photo/2013/03/29/20/45/japan-97824_1280.jpg",
    modified_at: new Date().setDate(new Date().getDate())
  },
  {
    created_at: new Date().setDate(new Date().getDate()),
    created_by: "darren behan",
    name: "wicklow golf club",
    description: "Wicklow Golf Club is an 18 hole parkland course just 30 minutes south of Dublin. Affiliated to the GUI in 1997, we now have over 400 members. The course boasts USGA spec. greens and tees. The holes around the turn are particularly challenging, with water features giving the golfer extra to watch out for.",
    address: "wicklow rd",
    town: "wicklow",
    county: "wicklow",
    postcode: "a11t34",
    num_holes: 18,
    par: 72,
    length: 6039,
    members: 534,
    green_fees_summer: 25,
    membership_full_men: 750,
    image: "https://cdn.pixabay.com/photo/2013/03/29/20/45/japan-97824_1280.jpg",
    modified_at: new Date().setDate(new Date().getDate())
  },
  {
    created_at: new Date().setDate(new Date().getDate()),
    created_by: "darren behan",
    name: "waterford golf club",
    description: "Waterford Golf Club is an 18 hole parkland course just 30 minutes south of Dublin. Affiliated to the GUI in 1997, we now have over 400 members. The course boasts USGA spec. greens and tees. The holes around the turn are particularly challenging, with water features giving the golfer extra to watch out for.",
    address: "waterford rd",
    town: "waterford",
    county: "waterford",
    postcode: "t31t34",
    num_holes: 18,
    par: 72,
    length: 6111,
    members: 343,
    green_fees_summer: 23,
    membership_full_men: 589,
    image: "https://cdn.pixabay.com/photo/2013/03/29/20/45/japan-97824_1280.jpg",
    modified_at: new Date().setDate(new Date().getDate())
  },
  {
    created_at: new Date().setDate(new Date().getDate()),
    created_by: "darren behan",
    name: "craddockstown golf club",
    description: "Craddockstown Golf Club is an 18 hole parkland course just 30 minutes south of Dublin. Affiliated to the GUI in 1997, we now have over 400 members. The course boasts USGA spec. greens and tees. The holes around the turn are particularly challenging, with water features giving the golfer extra to watch out for.",
    address: "craddockstown rd",
    town: "craddockstown",
    county: "dublin",
    postcode: "d31t34",
    num_holes: 18,
    par: 72,
    length: 6439,
    members: 381,
    green_fees_summer: 30,
    membership_full_men: 1099,
    image: "https://cdn.pixabay.com/photo/2016/10/25/22/29/half-moon-bay-1770186_1280.jpg",
    modified_at: new Date().setDate(new Date().getDate())
  }
];

db.GolfClub.deleteMany({})
  .then(() => db.GolfClub.collection.insertMany(golfClubSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
