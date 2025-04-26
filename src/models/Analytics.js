const db = require('../config/db');

const Analytics = {
    async getApplicationsPerStatus (profileId) {
        const result = await db.query(`
            SELECT status, COUNT(*) AS count 
            FROM applications 
            WHERE profile_id = $1 
            GROUP BY status 
            ORDER BY count DESC;`,
            [profileId]);
        return result.rows;
    },
};

module.exports = Analytics;