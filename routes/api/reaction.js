const express = require('express');
const router = express.Router();

const ReactionController = require('../../controllers/reactionController');

router.get('/', ReactionController.getReactions)
router.get('/:reactionId', ReactionController.getReactionById)
router.post('/', ReactionController.createReaction);
router.put('/:reactionId', ReactionController.updateReaction);
router.delete('/:reactionId', ReactionController.deleteReaction);

module.exports = router;