const mongoose = require('mongoose');
const Reaction = require('../models/Reaction');

const reactionData = [
    {
        reactionBody: 'Like',
        createdAt: new Date(),
        username: 'lukeinco',
    },
    {
        reactionBody: 'Like',
        createdAt: new Date(),
        username: 'Syd',
    },
    {
        reactionBody: 'Like',
        createdAt: new Date(),
        username: 'candle',
    },
];

async function seedReactions() {
    try {
        const result = await Reaction.insertMany(reactionData);
        return result;
    } catch (error) {
        console.error(error);
    }
}

module.exports = seedReactions;