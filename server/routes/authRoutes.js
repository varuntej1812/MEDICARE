// Import the express module
const express = require('express');

// Import the authController module, which contains the logic for handling authentication-related routes
const authController = require('../controllers/authController.js');

// Create a new router object using express.Router()
const router = express.Router();

// Import the multer module for handling file uploads
const multer = require('multer');

// Import the error middleware, which handles errors
const error = require('../middleware/error');

// Use the error middleware for all routes in this router
router.use(error);

// Configure multer to store uploaded files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a route for user signup, which includes handling a file upload for a photo
router.post('/signup', upload.single('photo'), authController.signup);

// Define a route for user login
router.post('/login', authController.login);

// Export the router object so it can be used in other parts of the application
module.exports = router;
