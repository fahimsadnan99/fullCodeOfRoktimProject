import React from 'react'
import Bkashs from "../../assets/img/Nagad.png"
import Layout from "../Layout/Layout"
import Navabar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios"
import { successMsg } from "../../utils/message";

const Bkash = () => {
    const history = useHistory()
    const ItemList = useSelector((state) => state);
    const MsgSend = async (email) => {
      await axios.post("http://localhost:3002/api/msg", { email: email })
          .then(res => console.log(res))
  }
  const handleSubmit =()=>{
    
    successMsg(true, "Product Perchanges Successful")
    MsgSend(ItemList.email)
  }
  return (
    <Layout>
    <Navabar></Navabar>

    <button className='btn btn-success mt-3 mx-2' onClick={()=> history.goBack()}>Go Back</button>
    <div className='text-center pb-4' style={{width : "500px",margin : "20px auto", boxShadow : "1px 2px 5px black",borderRadius : "2px"}}>
    <div style={{width : "250px",margin : "0 auto"}}>
    <img src={Bkashs} alt="Bkash" style={{width : "100%"}}/>
    </div>

    <div style={{width : "80%", margin : "0 auto"}}>
    <input type="number" placeholder="Enter Your Nagad Number" className='form-control'/>
    <input type="text" placeholder="Nagad Transaction ID (Trxid)" className='form-control mt-2'/>

    <button className='btn  my-3' style={{backgroundColor : "#ED1C24",color : "#fff"}}onClick={()=> handleSubmit}> Submit</button>
    </div>
    </div>
    <Footer></Footer>
    </Layout>
  )
}

export default Bkash