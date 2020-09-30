const router = require("express").Router();
const userRoutes = require("./users");
const golfClubRoutes = require("./golfClubs");

// User routes
router.use("/users", userRoutes);
// Golf Club routes
// router.use("/golfclub", golfClubRoutes);

module.exports = router;