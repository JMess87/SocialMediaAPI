const { Thought, User, } = require('../models');

module.exports = {

  //  Get Function that returns all thoughts

  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.find()
      .populate({
        path: "reactions",
        // use "select" to exclude "__v" field from thought document
        select: "-__v",
      })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  // Get function that retrieves a single thought 

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

  // Function to create a thought

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

  // Function to update a thought 

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


  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((video) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
            { thought: req.params.thoughId },
            { $pull: { videos: req.params.thoughtId } },
            { new: true }
          )
      )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'Thought created but no user with this id!' })
          : res.json({ message: 'Thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  }
};