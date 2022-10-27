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
  
    let allOrder = await OderSchema.find({user : id })
    
    try{
        return  res.status(200).send(allOrder)
    }catch(err){
        console.log(err.message);
    }
     
}


const updatePaid = async (req,res)=>{
  let {id }= req.params

  
  try{
     await OderSchema.findByIdAndUpdate({_id : id}, req.body) 
    res.status(201).send("Successfully updated")
  }catch(err){
    return res.status(500).send(err.message)
  }
}


const updateStatus = async (req,res)=>{
  let {id} = req.params
  try{
    await OderSchema.findByIdAndUpdate({_id : id}, req.body) 
   res.status(201).send("Successfully updated")
 }catch(err){
   return res.status(500).send(err.message)
 }
}
module.exports = { OrderPost,getAllOrder,userAllOrder,updatePaid,updateStatus };
