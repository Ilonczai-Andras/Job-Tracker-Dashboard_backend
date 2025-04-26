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

    async getSuccessRate (profileId) {
        const result = await db.query(`
          SELECT 
          SUM(CASE WHEN status = 'offer' THEN 1 ELSE 0 END)::float / COUNT(*) * 100 AS success_rate
          FROM applications
          WHERE profile_id = $1;`, 
          [profileId]);
        return result.rows[0].success_rate || 0;
      },
    
    async getAverageTimePerStatus (profileId) {
      const query = `
        SELECT 
        status,
        ROUND(AVG(EXTRACT(EPOCH FROM (updated_at - created_at)) / 86400), 2) AS average_days
        FROM applications
        WHERE profile_id = $1
        GROUP BY status
        ORDER BY average_days ASC;
      `;
      const values = [profileId];
    
      const { rows } = await db.query(query, values);
      return rows;
    },
};

module.exports = Analytics;