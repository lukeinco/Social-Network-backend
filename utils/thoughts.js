const mongoose = require('mongoose');
const Thought = require('../models/Thought');

const thoughtData = [
    {
        thoughtText: 'Thought 1',
        createdAt: new Date(),
        username: 'user1',
        reactions: [],
    },
    {
        thoughtText: 'Thought 2',
        createdAt: new Date(),
        username: 'user2',
        reactions: [],
    },
    {
        thoughtText: 'Thought 3',
        createdAt: new Date(),
        username: 'user1',
        reactions: [],
    },
];

async function seedThoughts() {
    try {
        const result = await Thought.insertMany(thoughtData);
        return result;
    } catch (error) {
        console.error(error);
    }
}

module.exports = seedThoughts;