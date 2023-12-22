const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            unique: false,
            default: 'anon',
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAt) => dateFormat(createdAt),
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
