const express = require("express")
const AuthAdmin = require("../middlewares/Admin")
const authorizationUser = require("../middlewares/Authorization")
const {createCatagory,getCatagory} = require("../controles/catagoryContoler")


const Routers = express.Router()

Routers.route("/")
    .get(getCatagory)
    .post(authorizationUser, AuthAdmin, createCatagory)

    module.exports = Routers