const router = require("express").Router();
const userController = require("../../../controllers/apiControllers/userController");

// GET all users
router.route("/").get(userController.allUsers);
// POST a new user
router.route("/").post(userController.createUser);
// get single user by id
router.route("/:userId").get(userController.userById);
// update single user by id
router.route("/:userId").put(userController.updateUserById);
// delete single user by id
router.route("/:userId").delete(userController.deleteUserById);
//add a new friend to a user's friend list
router.route("/:userId/friends/:friendId").put(userController.addNewFriend);
//remove a friend from a user's friend list
router.route("/:userId/friends/:friendId").delete(userController.deleteFriend);

module.exports = router;

/*
/api/users

GET all users

GET a single user by its _id and populated thought and friend data

POST a new user:

// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
PUT to update a user by its _id

DELETE to remove user by its _id

BONUS: Remove a user's associated thoughts when deleted.

/api/users/:userId/friends/:friendId

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list
 */
