const express = require("express")
const { createCartItem, getCartItem, updateCartItem, deleteCartItem } = require("../controles/CartController");
const authorizationUser = require("../middlewares/Authorization");




const Routers = express.Router()
Routers.route("/")
    .get(authorizationUser,getCartItem)
    .post(authorizationUser,createCartItem)
    .put(authorizationUser,updateCartItem);

Routers.route("/:id")
    .delete(authorizationUser, deleteCartItem)
  

    module.exports = Routers