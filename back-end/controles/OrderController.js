const OderSchema = require("../models/OrderSchema.js");

const OrderPost = async (req, res) => {
  

  let newOrder = new OderSchema(req.body);

  try {
    await newOrder.save();
    res.status(201).send("Oder Set Successfully");
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};




const getAllOrder = async (req,res)=>{
     let allOrder = await OderSchema.find()
      return  res.status(200).send(allOrder)
}


const userAllOrder = async (req,res)=>{
 
    let {id} = req.params
    console.log(id);
  
    let allOrder = await OderSchema.findById({user : id })
    console.log(allOrder);
    // try{
    //     return  res.status(200).send(allOrder)
    // }catch(err){
    //     console.log(err.message);
    // }
     
}
module.exports = { OrderPost,getAllOrder,userAllOrder };
