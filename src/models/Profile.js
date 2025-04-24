const db = require('../config/db');

const createProfile = async ({ auth0_id, name, email, picture }) => {
    const { rows } = await db.query(
      `INSERT INTO profiles (auth0_id, name, email, picture)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [auth0_id, name, email, picture]
    );
    return rows[0];
  };

const getProfileByAuth0Id = async (auth0_id) => {
    const { rows } = await db.query(
        `SELECT * FROM profiles WHERE auth0_id = $1`,
        [auth0_id]
    );
    return rows[0];
};

const updateProfile = async ({ auth0_id, name, email, picture }) => {
    const { rows } = await db.query(
        `UPDATE profiles SET name = $1, email = $2, picture = $3 
         WHERE auth0_id = $4 
         RETURNING *`,
        [name, email, picture, auth0_id]
    );
    return rows[0];
};

module.exports = { createProfile, getProfileByAuth0Id, updateProfile };
