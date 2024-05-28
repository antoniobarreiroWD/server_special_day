const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users.controller');

router.get('/:userId', userController.getUser);

router.put('/:userId', userController.updateUser);

module.exports = router;