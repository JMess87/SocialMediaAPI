const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/Controller");

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api//:ThoughtId
router
  .route("/:ThoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/videos/:videoId/responses
router.route("/:thoughtId/reaction").post(addReaction);


router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
