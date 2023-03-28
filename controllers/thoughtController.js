const { Thought, User } = require('../models');

const thoughtController = {

  //  get for all thoughts with associated reactions
  getAllThoughts(req, res) {
    Thought.find()
      .populate({
        path: "reactions",
        // use "select" to exclude "__v" field from thought document
        select: "-__v",
      })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  // / function to get one thought by id
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(dbThoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },

  // function to create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          // $push operator to push the created _id of the thought to the thoughts array in the associated User document
          { $push: { thoughts: _id } },
          { new: true }
        )
      })
      .catch((err) => res.status(500).json(err));
  },

  // function to update a thought data by id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      })
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(dbThoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },

};
module.exports = thoughtController;