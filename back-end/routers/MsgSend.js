const express = require('express');
const NodeMailer = require('../config/Nodemailer')

const Routers = express.Router()
Routers.route("/")
     .post( async(req,res)=>{
         NodeMailer(req.body.email)
         res.status(200).json({"message" : "Message Send Successfully"})
     })

module.exports = Routers