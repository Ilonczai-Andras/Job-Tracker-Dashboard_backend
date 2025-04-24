const Profile = require('../models/Profile');

exports.createProfileIfNotExists = async ({ auth0_id, name, email, picture }) => {
    const existing = await Profile.getProfileByAuth0Id(auth0_id);
  
    if (existing) {
      return existing;
    }
  
    return await Profile.createProfile({ auth0_id, name, email, picture });
  };

exports.updateProfile = async ({ auth0_id, name, email, picture }) => {
  const existing = await Profile.getProfileByAuth0Id(auth0_id);

  if (!existing) {
    throw new Error("Profile not found");
  }

  const isDifferent =
    existing.name?.trim() !== name?.trim() ||
    existing.email?.trim().toLowerCase() !== email?.trim().toLowerCase() ||
    existing.picture?.trim() !== picture?.trim();

  if (!isDifferent) {
    return existing;
  }

  return await Profile.updateProfile({ auth0_id, name, email, picture });
};

exports.getProfileByAuth0Id = (auth0_id) => {
  return Profile.getProfileByAuth0Id(auth0_id);
};
