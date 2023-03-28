const { Schema, model, Types } = require("mongoose");
const { Thought } = require(".");

const thoughsSchema = new Schema(
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
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// Initialize the model
module.exports = Thought;
