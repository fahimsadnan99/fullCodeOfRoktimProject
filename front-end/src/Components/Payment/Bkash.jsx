import React, { useState } from 'react'
import Bkashs from "../../assets/img/Bkash.svg"
import Layout from "../Layout/Layout"
import Navabar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios"
import { successMsg } from "../../utils/message";

const Bkash = () => {
    const history = useHistory()
    const [cardInfo,setCardInfo] = useState({
      number : "",
      textId : ""
    })
    const ItemList = useSelector((state) => state);

    const handleChange = (e)=>{
      console.log([e.target.name] = e.target.value);
      
    }
   
  const handleSubmit =()=>{
    
    // successMsg(true, "Product Perchanges Successful")
    // MsgSend(ItemList.email)

    console.log("x");

  }
  return (
    <Layout>
    <Navabar></Navabar>
    <button style={{paddingTop : "100px"}} className='btn btn-success mt-3 mx-2' onClick={()=> history.goBack()}>Go Back</button>
    <div className='text-center pb-4' style={{width : "500px",margin : "20px auto", boxShadow : "1px 2px 5px black",borderRadius : "2px"}}>
    <div style={{width : "250px",margin : "0 auto"}}>
    <img src={Bkashs} alt="Bkash" style={{width : "100%"}}/>
    </div>

    <div style={{width : "80%", margin : "0 auto"}}>
    <input type="number" name= "number" onChange={handleChange} placeholder="Enter Your Bkash Number" className='form-control'/>
    <input type="text" name="textId" onChange={ handleChange}  placeholder="bKash Transaction ID (Trxid)" className='form-control mt-2'/>

    <button className='btn my-3' style={{backgroundColor : "#DF146E",color : "#fff"}} onClick={()=> handleSubmit}> Submit</button>
    </div>
    </div>
    <Footer></Footer>
    </Layout>
  )
}

export default Bkash