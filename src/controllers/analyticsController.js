const analyticsService = require('../services/analyticsService');

exports.fetchAnalyticsData  = async (req, res, next) => {
    try {
        const analytics = await analyticsService.fetchAnalyticsData(req.profile.id);
        res.json(analytics);
    } catch (err) {
        next(err);
    }
}