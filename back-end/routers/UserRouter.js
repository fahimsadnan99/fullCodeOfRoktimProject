const express = require('express')
const { signin,signup,allUsers } = require("../controles/UserController")


const User = express.Router();

User.route("/signUp").post(signup);
User.route("/signIn").post(signin);
User.route("/allUser").get(allUsers)


module.exports = User;
