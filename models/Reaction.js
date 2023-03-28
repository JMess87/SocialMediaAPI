const { Schema, model, Types } = require("mongoose");
const formatDate = require("../utils/formatDate");

const thoughtSchema = new Schema(
  {
      thoughtText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 128
      },
      created_at: {
          type: Date,
// time stamp date of now
          default: Date.now,
          get: (timestamp) => formatDate(timestamp)
      },
      username: {
          type: String,
          required: true
      },
      reactions: [reactionSchema],
  },
  {
// Set option to use getters when converting document to JSON
      toJSON: {
          getters: true,
          virtuals: true,
      },
      id: false,
  }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// Initialize the model
module.exports = Thought;
