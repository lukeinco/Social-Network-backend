const { Reaction } = require('../models/Reaction');

module.exports = {
    // Get reactions
    getReactions: async (req, res) => {
        try {
            const reactions = await Reaction.find();
            res.json(reactions);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Get Reaction by id
    getReactionById: async (req, res) => {
        try {
            const reactionId = req.params.reactionId;
            const reaction = await Reaction.findById(reactionId);
            if (!reaction) {
                return res.status(404).json({ message: 'Reaction not found' });
            }
            res.json(reaction);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // Create new Reaction
    createReaction: async (req, res) => {
        try {
            const reactionData = req.body;
            const newReaction = await Reaction.create(reactionData);
            res.json(newReaction);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // Update reaction
    updateReaction: async (req, res) => {
        try {
            const reactionId = req.params.reactionId;
            const updatedData = req.body;
            const updatedReaction = await Reaction.findByIdAndUpdate(reactionId, updatedData, { new: true });
            if (!updatedReaction) {
                return res.status(404).json({ message: 'Reaction not found' });
            }
            res.json(updatedReaction);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Delete reaction
    deleteReaction: async (req, res) => {
        try {
            const reactionId = req.params.reactionId;
            const removedReaction = await Reaction.findByIdAndRemove(reactionId);
            if (!removedReaction) {
                return res.status(404).json({ message: 'Reaction not found' });
            }
            res.json({ message: 'Reaction removed' });
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
};