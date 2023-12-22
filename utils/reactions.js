const mongoose = require('mongoose');
const Reaction = require('../models/Reaction');

const reactionData = [
    {
        reactionBody: 'Like 1',
        createdAt: new Date(),
        username: 'user1',
    },
    {
        reactionBody: 'Like 2',
        createdAt: new Date(),
        username: 'user2',
    },
    {
        reactionBody: 'Like 3',
        createdAt: new Date(),
        username: 'user1',
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