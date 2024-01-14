const { Thought } = require('../models/Thought');

const thoughtData = [
    {
        thoughtText: 'Hello',
        createdAt: new Date(),
        username: 'lukeinco',
        reactions: [],
    },
    {
        thoughtText: 'Any thoughts?',
        createdAt: new Date(),
        username: 'Syd',
        reactions: [],
    },
    {
        thoughtText: 'Hello hello',
        createdAt: new Date(),
        username: 'candle',
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