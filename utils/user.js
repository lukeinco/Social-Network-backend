const { User } = require('../models/User');

const userData = [
    {
        userName: 'lukeinco',
        email: 'luke@test.com',
        thoughts: [],
        friends: [],
    },
    {
        userName: 'Sydni',
        email: 'syd@test.com',
        thoughts: [],
        friends: [],
    },
    {
        userName: 'candle',
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