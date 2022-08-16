const mongoose = require("mongoose")


const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  phone: String,
  address: String,
  city: String,
  postCode: Number,
}, { timestamps: true });

module.exports = mongoose.model("Profile", profileSchema)