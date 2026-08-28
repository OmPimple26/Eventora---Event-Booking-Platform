const express = require('express');
const router = express.Router();
const { register, login, verifyOTP } = require('../controllers/authController.js');

// router.post('/register', (req,res) => {
//     res.send("User registered successfully");
// })

router.post('/register', register);
router.post('/login', login);
router.post('/verify-otp', verifyOTP);

module.exports = router;