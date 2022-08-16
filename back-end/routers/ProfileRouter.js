const express = require("express");
const { getProfile, setProfile } = require("../controles/ProfileController");
const authorizationUser = require("../middlewares/Authorization");

const Routers = express.Router();

Routers.route("/")
  .get(authorizationUser, getProfile)
  .post(authorizationUser, setProfile);

module.exports = Routers;
