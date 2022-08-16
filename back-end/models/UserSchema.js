const mongoose = require("mongoose");
const validator = require("validator");
const JWT = require("jsonwebtoken");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [3, "Minimum 3 letter Requred"],
      maxlength: [50, "Maximum 50 Letter suported"],
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [8, "Minimum 8 letter Requred"],
      maxlength: [250, "Maximum 250 Letter suported"],
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Envalid Email Address");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Minimum 8 letter Requred"],
      maxlength: [1024, "Maximum 250 Letter suported"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

UserSchema.methods.generateJWT = function () {
  const token = JWT.sign(
    { _id: this._id, name: this.name, email: this.email, role: this.role },
    process.env.KEY,
    { expiresIn: "27d" }
  );
  return token;
};

module.exports = mongoose.model("User", UserSchema);
