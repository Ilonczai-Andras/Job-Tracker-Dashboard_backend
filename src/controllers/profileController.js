const profileService = require('../services/profileService');

exports.createProfile = async (req, res, next) => {
    try {
      const auth0_id = req.auth.sub;
      const { name, email, picture } = req.body;
  
      if (!name || !email || !picture) {
        return res.status(400).json({ error: 'Missing name, email or picture' });
      }
  
      const profile = await profileService.createProfileIfNotExists({ auth0_id, name, email, picture });
      res.json(profile);
    } catch (err) {
      next(err);
    }
  };
  

exports.getProfile = async (req, res, next) => {
    try {
        const auth0_id = req.auth.sub;
        const profile = await profileService.getProfileByAuth0Id(auth0_id);

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        res.json(profile);
    } catch (err) {
        next(err);
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
      const auth0_id = req.auth.sub;
      const { name, email, picture } = req.body;
  
      if (!name || !email || !picture) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const profile = await profileService.updateProfile({ auth0_id, name, email, picture });
      res.json(profile);
    } catch (err) {
      next(err);
    }
  };
  