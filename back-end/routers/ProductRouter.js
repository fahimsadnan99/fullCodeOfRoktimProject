const express = require("express")
const AuthAdmin = require("../middlewares/Admin")
const authorizationUser = require("../middlewares/Authorization")
const {
  getProduct,
  createProduct,
  getProductById,
  updateProductById,
  filterProducts,
  deleteProduct
} = require("../controles/ProductControler");
const upload = require("../middlewares/multer")



const Routers = express.Router()

Routers.route("/")
    .get(getProduct)
.post([authorizationUser,AuthAdmin],upload.single("file"),createProduct)

Routers.route("/:id")
  .get(getProductById)
  .put([authorizationUser, AuthAdmin], upload.single("file"), updateProductById)
  .delete(deleteProduct)

Routers.route("/filter")
.post(filterProducts)
module.exports = Routers