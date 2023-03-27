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
    // thoughts column must be an array per read me
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },],
  //  friends column must be an array per read me
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


const User = model("user", userSchema);

// Initialize the model

module.exports = User;
