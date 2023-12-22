const User = require('../models/User');

const userData = [
    {
        username: 'lukeinco',
        email: 'luke@test.com',
        thoughts: [],
        friends: [],
    },
    {
        username: 'Syd',
        email: 'syd@test.com',
        thoughts: [],
        friends: [],
    },
    {
        username: 'candle',
        email: 'candle@test.com',
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