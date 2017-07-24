const express = require('express');
const router = express.Router();

const authController =  require("../controllers/authentication-controller.js")

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
