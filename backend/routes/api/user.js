const UserController = require('../../controllers/user.js');

const express = require('express');

const router = express.Router();

router.get('/', UserController.getUserList);

module.exports = router;
