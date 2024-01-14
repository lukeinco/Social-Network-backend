const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/userController');

router.get('/', UserController.getUsers);
router.get('/:userId', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);
router.post('/:userId/friends/:friendId', UserController.addFriend);
router.delete('/:userId/friends/:friendId', UserController.deleteFriend);

module.exports = router;