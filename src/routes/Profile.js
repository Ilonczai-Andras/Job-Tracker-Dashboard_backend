const express = require('express');
const router = express.Router();
const checkJwt = require('../middlewares/checkJwt');
const profileController = require('../controllers/profileController');

// Protected routes
router.post('/', checkJwt, profileController.createProfile);
router.get('/', checkJwt, profileController.getProfile);
router.put('/', checkJwt, profileController.updateProfile);

module.exports = router;