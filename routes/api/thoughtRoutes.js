const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api//:ThoughtId
router
  .route("/:ThoughtId")
  .get(getThoughtById)
  .put(updateThought);


// /api/thoughts/:thoughtId/reaction
router.route("/:thoughtId/reaction").post(addReaction);


router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
