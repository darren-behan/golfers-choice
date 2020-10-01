const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  // POST route for creating a new user
  .post(usersController.create);

// Matches with "/api/users/:id"
router.route("/:id")
  // PUT route for updating an existing user
  .put(usersController.update)
  // DELETE route for removing an existing user
  .delete(usersController.remove);

// Matches with "/api/users/login"
router.route("/login")
  // POST request for logging in a user.
  .post(usersController.login)

module.exports = router;
