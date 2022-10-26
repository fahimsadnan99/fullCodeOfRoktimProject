const express = require("express")
const {OrderPost,getAllOrder,userAllOrder} = require("../controles/OrderController")



const Routers = express.Router()
Routers.route("/")
  .post(OrderPost)
  .get(getAllOrder)

  Routers.route("/:id")
  .get(userAllOrder)


module.exports = Routers