// routes/auth.js
const express = require('express');
const passport = require('passport');
const { registerUser, loginUser, verifyEmail, googleCallback } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/verify/:token', verifyEmail);

// Google OAuth routes
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), googleCallback);

module.exports = router;