const Analytics = require('../models/Analytics');

exports.fetchAnalyticsData = async (profileId) => {
    const applicationsPerStatus = await Analytics.getApplicationsPerStatus(profileId);
    const successRate = await Analytics.getSuccessRate(profileId);
  
    return {
      applicationsPerStatus,
      successRate,
    };
  };