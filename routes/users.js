const { application } = require('express');
var express = require('express');
var router = express.Router();

const UsersController = require("../controllers/users");
const User = require('../models/user');

// this forwards the post response and request from react to the express controller
router.post("/", UsersController.Create);

module.exports = router;
