import React, { useEffect, useState } from 'react'
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
    const [totalPrice,setTotalPrice] = useState("")
    const [cardInfo,setCardInfo] = useState({
      number : "",
      textId : "",
      bkash : false
    })
    const dispatch = useDispatch()

    const totalPriceCalculte = ()=>{
      let price = 0;
      ItemList?.item?.map(e => {
       price = e.price * e.count
      })
      return price
    }
    
    const handleChange = (e)=>{
     
      setCardInfo({
        ...cardInfo,
        [e.target.name]: e.target.value
      })
      
    }
  const handleSubmit =()=>{
    if(cardInfo.number.length < 11 || cardInfo.number.length > 11){
      window.alert("Number must be 11")
   }else if(cardInfo.textId.length < 15 || cardInfo.textId.length >16){
     window.alert("TextId must be 16 letters")
   }else{
    successMsg(true, "Go to Processing")
    let test = {...ItemList.checkOutUserData,
      item : ItemList.item,
      cardInfo,
      totalPrice : totalPrice
    }
    console.log(test);
    axios.post("http://localhost:3002/api/order", test)
    dispatch({type : "REMOVE_ALL_ITEM"})
    history.push("/")
   }
  }


  useEffect(()=>{

    
    setTotalPrice(totalPriceCalculte() + ItemList.transportFee )
   
    
  },[])
  return (
    <Layout>
    <Navabar></Navabar>

    <button style={{paddingTop : "100px"}} className='btn btn-success mt-3 mx-2' onClick={()=> history.goBack()}>Go Back</button>
    <div className='text-center pb-4' style={{width : "500px",margin : "20px auto", boxShadow : "1px 2px 5px black",borderRadius : "2px"}}>
    <div style={{width : "250px",margin : "0 auto"}}>
    <img src={Bkashs} alt="Bkash" style={{width : "100%"}}/>
    </div>

    <div style={{width : "80%", margin : "0 auto"}}>
    <input type="number" name='number' onChange={handleChange} placeholder="Enter Your Nagad Number" className='form-control'/>
    <input type="text" name='textId' onChange={handleChange}  placeholder="Nagad Transaction ID (Trxid)" className='form-control mt-2'/>

    <button className='btn  my-3' style={{backgroundColor : "#ED1C24",color : "#fff"}}onClick={()=> handleSubmit()}> Submit</button>
    </div>
    </div>
    <Footer></Footer>
    </Layout>
  )
}

export default Bkash