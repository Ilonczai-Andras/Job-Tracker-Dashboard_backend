const Analytics = require('../models/Analytics');

exports.getAll = (profile_id) => Analytics.getAnalytics(profile_id);