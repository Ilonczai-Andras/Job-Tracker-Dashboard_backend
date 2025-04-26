const analyticsService = require('../services/analyticsService');

exports.getAllAnalytics = async (req, res, next) => {
    try {
        const analytics = await analyticsService.getAll(req.profile.id);
        res.json(analytics);
    } catch (err) {
        next(err);
    }
}