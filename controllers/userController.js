const mongoose = require('mongoose');
const { User } = require('../models/User');

module.exports = {
    // Get all users
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Get a single user by _id and populate thoughts and friends
    getUserById: async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findById(userId)
                .populate('thoughts')
                .populate('friends');

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Create a new user
    createUser: async (req, res) => {
        try {
            const userData = req.body;
            const newUser = await User.create(userData);
            res.json(newUser);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Update a user by _id
    updateUser: async (req, res) => {
        try {
            const userId = req.params.userId;
            const updatedData = req.body;
            const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json(updatedUser);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    
    // Delete a user by _id
    deleteUser: async (req, res) => {
        try {
            const userId = req.params.userId;
            const deletedUser = await User.findByIdAndRemove(userId);

            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json({ message: 'User removed' });
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
};