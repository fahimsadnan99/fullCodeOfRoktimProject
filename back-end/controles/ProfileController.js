const ProfileSchema = require("../models/Profile");
const _ = require("lodash");

const getProfile = async (req, res) => {
  const userId = req.user._id;

  const profileGet = await ProfileSchema.findOne({ user: userId });

  return res.status(200).send(profileGet);
};

const setProfile = async (req, res) => {
  const userId = req.user._id;
  
  const updateProfile = _.pick(req.body, [
    "phone",
    "address",
    "city",
    "postCode",
    "name",
  ]);
  updateProfile["user"] = userId;

  const profile = await ProfileSchema.findOne({ user: userId });

  if (profile) {
    await ProfileSchema.updateOne({ user: userId }, updateProfile);
    return res.status(200).send("Profile Update Successfully");
  } else {
    const data = new ProfileSchema(updateProfile);
    await data.save();
    return res.status(200).send("Profile Created");
  }
};

module.exports = { getProfile, setProfile };
