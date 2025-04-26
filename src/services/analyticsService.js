const Analytics = require('../models/Analytics');

exports.fetchAnalyticsData  = (profile_id) => Analytics.getApplicationsPerStatus(profile_id);