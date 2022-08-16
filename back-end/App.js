const express = require("express");
const error = require("./middlewares/erros")
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv").config();
const User = require("./routers/UserRouter");
const Profile = require("./routers/ProfileRouter");
const Catagory = require("./routers/catagoryRouter")
const Product = require("./routers/ProductRouter")
const Cart = require("./routers/cartRouter")
const Msg = require("./routers/MsgSend")

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/upload", express.static(path.join(__dirname, "image/product")));

app.use("/api/user", User);
app.use("/api/profile", Profile);
app.use("/api/catagory", Catagory);
app.use("/api/product", Product)
app.use("/api/cart", Cart)
app.use("/api/msg", Msg)




module.exports = app;
