const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [5, "Minimum 5 letter Name"],
      maxlength: [200, "Maximum 200 letter Name"],
    },
    manufecture : {
      type : String,
      required: true,
    },

    expireDate: {
      type: String,
      required: true,
    },
    price: Number,
    quantity: Number,
    catagory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Catagory",
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
