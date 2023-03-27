const { Schema, model } = require("mongoose");

// User Schema based off of ReadMe for assignment
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // thoughts column must be and array, there can be unlimited unique thoughts by a user
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },],

    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
