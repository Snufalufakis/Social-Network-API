const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

router.use("/users", userRoutes); // routes for users and their friends
router.use("/thoughts", thoughtRoutes); // routes for user thoughts

module.exports = router;
