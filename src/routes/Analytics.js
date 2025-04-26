const express = require('express');
const router = express.Router();
const checkJwt = require('../middlewares/checkJwt');
const profileLoader = require('../middlewares/profileLoader');
const analyticsController = require('../controllers/analyticsController');

// Middlewares
router.use(checkJwt);
router.use(profileLoader);

// Routes
router.get('/', analyticsController.getAllAnalytics);

module.exports = router;
