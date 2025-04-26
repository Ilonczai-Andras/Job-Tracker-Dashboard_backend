const Analytics = require('../models/Analytics');

exports.fetchAnalyticsData = async (profileId) => {
    const applicationsPerStatus = await Analytics.getApplicationsPerStatus(profileId);
    const successRate = await Analytics.getSuccessRate(profileId);
    const averageTimePerStatus = await Analytics.getAverageTimePerStatus(profileId);
  
    return {
      applicationsPerStatus,
      successRate,
      averageTimePerStatus,
    };
  };