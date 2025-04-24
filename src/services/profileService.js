const Profile = require('../models/Profile');

exports.createOrUpdateProfile = async ({ auth0_id, name, email, picture }) => {
    const existing = await Profile.getProfileByAuth0Id(auth0_id);

    if (!existing) {
        return Profile.createProfile({ auth0_id, name, email, picture });
    }

    const isDifferent = (
        existing.name !== name ||
        existing.email !== email ||
        existing.picture !== picture
    );

    if (isDifferent) {
        return Profile.updateProfile({ auth0_id, name, email, picture });
    }

    return existing;
};
exports.getProfileByAuth0Id = (auth0_id) => Profile.getProfileByAuth0Id(auth0_id);