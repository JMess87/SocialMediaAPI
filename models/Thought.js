
const { Schema, Thought, model, } = require("mongoose");
const Reaction = require("./Reaction");
//  Format of the thought table, this will drive the creation of the thought table in the DB.


const thoughtSchema = new Schema(
    {

        thoughtBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        // this can be an array of thoughts, this is unique about NoSQL vs SQL databases, No SQL can hold arrays.
        reactions: [Reaction],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false,


    }
);
//  We are creating a virtual that gets the # of reactions to a thought 
thoughtSchema
    .virtual('getReactions')
    // Getter
    .get(function () {
        return this.reactions.length;
    });

// Initialize the model

module.exports = Thought;
