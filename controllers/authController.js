# Create authController.js
echo "Creating Authentication Controller..."
cat <<EOL > controllers/authController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const axios = require('axios'); // Import axios

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};