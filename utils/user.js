const mongoose = require('mongoose');
const User = require('../models/User');

const userData = [
    {
        username: 'user1',
        email: 'user1@example.com',
        thoughts: [],
        friends: [],
    },
    {
        username: 'user2',
        email: 'user2@example.com',
        thoughts: [],
        friends: [],
    },
    {
        username: 'user3',
        email: 'user3@example.com',
        thoughts: [],
        friends: [],
    },
];

async function seedUsers() {
    try {
        const result = await User.insertMany(userData);
        return result;
    } catch (error) {
        console.error(error);
    }
}

module.exports = seedUsers;