const express = require("express")
const {OrderPost,getAllOrder,userAllOrder,updatePaid,updateStatus} = require("../controles/OrderController")



const Routers = express.Router()
Routers.route("/")
  .post(OrderPost)
  .get(getAllOrder)

  Routers.route("/:id")
  .get(userAllOrder)

  Routers.route("/paid/:id")
  .patch(updatePaid)
  Routers.route("/status/:id")
  .patch(updateStatus)


module.exports = Routers