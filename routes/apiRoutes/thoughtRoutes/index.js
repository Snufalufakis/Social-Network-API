const router = require("express").Router();
const thougthController = require("../../../controllers/apiControllers/thoughtController");

router.route("/").get(thougthController.allThoughts);
router.route("/").post(thougthController.createThought);
router.route("/:thoughtId").get(thougthController.thoughtById);
router.route("/:thoughtId").put(thougthController.updateThoughtById); // new
router.route("/:thoughtId").delete(thougthController.deleteThoughtById);
router.route("/:thoughtId/reactions").post(thougthController.addReaction);
router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(thougthController.deleteReaction);

module.exports = router; /*
/api/thoughts

GET to get all thoughts

GET to get a single thought by its _id

POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
PUT to update a thought by its _id

DELETE to remove a thought by its _id

/api/thoughts/:thoughtId/reactions

POST to create a reaction stored in a single thought's reactions array field

DELETE to pull and remove a reaction by the reaction's reactionId value
 */
