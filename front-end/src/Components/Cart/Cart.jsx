import React, { useState,useEffect, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
// import CartItem from "./CartItem";
import {useHistory} from "react-router-dom"
import { GetProfileData } from "../../API/AllApi";
import Footer from '../Footer/Footer'

const Cart = () => {
  const token = JSON.parse(localStorage.getItem("jwt"));
  const history = useHistory()
  const [data, setData] = useState();
  const [disabled, setDisabled] = useState(true);
  const [transport, setTransport] = useState({
    transportSystem: "",
    transportFee: 0,
  });

  const [activeBtn,setActiveBtn] = useState(true);
  const [deliveryCharge,setDeliveryCharge] = useState(0)
  const [divition,setDeviton] = useState("")
  const[showDiviton,setShowDiviton] = useState(false)
  const [saCount,setSaCount] = useState(0)

  const ItemList = useSelector((state) => state);

  console.log( "item", ItemList.item)
  const weight = ()=>{
    let totalWeight = 0;
    let quantity = 0;
    ItemList?.item?.map((item)=>{
      totalWeight += item.weight;
      quantity += item.count;
    } )
    return totalWeight * quantity;
  }

  const countProduct = ()=>{

    let quantity = 0;

    ItemList?.item?.map((item)=>{
      quantity += item.count;
      
    } )
    return  quantity;
  }


  const dispatch = useDispatch();
  const price = () => {
    let sum = 0;
    let quantity = 0;
    ItemList.item.map((el) => {
      const newPrice = el.price * el.count;
      sum += newPrice;
      quantity += el.count;
    });
    return { sum, quantity };
  };

  const handleChageDivisions=(e)=>{
    if(weight() < 1000){
      window.alert("Your weight is less than 1000 KG")
      setDeviton("")
      setTransport({
        transportSystem: "",
        transportFee: 0,
      });
    }else{


if (e.target.value === "0"){
  setDeviton("")
  setTransport({
    transportSystem: "",
    transportFee: 0,
  });
  setDeliveryCharge(0)

}
      
    if(e.target.value === "1000"){
      setDeviton(e.target.value)
      setTransport({
        transportSystem: "Dhaka",
        transportFee: 7000,
      })
      setDeliveryCharge(7000)
    }
    else if(e.target.value === "500"){
      setDeviton(e.target.value)
      setTransport({
        transportSystem: "Chittagong",
        transportFee: 5000,
      })
      setDeliveryCharge(5000)
    }
    else if(e.target.value === "2500"){
      setDeviton(e.target.value)
      setTransport({
        transportSystem: "Rajshahi",
        transportFee: 13000,
      })
      setDeliveryCharge(13000)
    }
    else if(e.target.value === "3500"){
      setDeviton(e.target.value)
      setTransport({
        transportSystem: "Sylhet",
        transportFee: 15000,
      })
      setDeliveryCharge(15000)
    }
    else if(e.target.value === "3000"){
      setDeviton(e.target.value)
      setTransport({
        transportSystem: "Rangpur",
        transportFee: 9000,
      })
      setDeliveryCharge(9000)
    }
    else if(e.target.value === "1500"){
      setDeviton(e.target.value)
      setTransport({
        transportSystem: "Barisal",
        transportFee: 8000,
      })
      setDeliveryCharge(8000)
    }
    else if(e.target.value === "2000"){
      setDeviton(e.target.value)
      setTransport({
        transportSystem: "Khulna",
        transportFee: 10000,
      })
      setDeliveryCharge(10000)
    }
  }
 
  }

  const handleChageTransport = (e) => {
    if (e.target.value === "0"){
      setDeliveryCharge(0)
      setTransport({
        transportSystem: "",
        transportFee: 0,
      });
    }
      
      
    if (e.target.value === "500"){
      setShowDiviton(false)
             if(weight() >= 20){
              window.alert("SA poribohon Support Mximum 20KG")
             }else {
              setTransport({
                 transportSystem: "SA poribahan",
                transportFee: saCount *250,
              });

              setDeliveryCharge(saCount * 250)
             }

    }
      
 if(e.target.value === "1000") setShowDiviton(true)

    if (e.target.value === "1500") {
      setShowDiviton(false)
      if(weight() >= 500){
        window.alert("Home Delivery Support Mximum 500KG")
      }else{
      
      setTransport({
        transportSystem: "Home Delivery",
        transportFee: saCount *250,
      });
      setDeliveryCharge(saCount *250,)
    }
    }
    
  };



  useEffect(() => {
    if (token) {
         GetProfileData()
           .then((res) => setData(res.data))
           .catch((err) => console.log(err));
      }
     
      
      
    }, []);


    useEffect(()=>{
    let  quantity = 0;
      ItemList?.item?.map((item)=>{
        quantity += item.count;
        
      } )
      setSaCount(quantity)
  
    },[activeBtn])
  
  
  const checkOut = () => {
    if (transport.transportSystem.length === 0) {
      if(divition.length === 0 && showDiviton === true){
        window.alert("Please select Division || Weight is less than 1000 KG");
      }else{
      window.alert("Please select Item");
    }
    } else if(!token){
      history.push("/user/checkout")
    }else {
      dispatch({ type: "transport_add", value: { ...transport } });
      history.push("/user/checkout")
      dispatch({ type: "ADD_USER_DATA", value: data });
     
      
    }
  };

 

  return (
    <Layout title="Cart Page">
      <Navbar></Navbar>
      <button className='btn btn-success mt-3 mx-2' onClick={()=> history.goBack()}>Go Back</button>
      <div className="container">
        <h2
          className="text-center mb-5 mt-2"
          style={{
            borderBottom: "2px solid black",
            width: "300px",
            margin: "0 auto",
            color: "black",
            fontWeight: "bold",
            
          }}
        >
          Cart Item
        </h2>
        <div className="row">
          <div className="col-9">
           <table className="table">
              <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
              </tr>
  
  { ItemList?.item.map((el) => {
    return (
      <tr style={{fontSize : "18px"}}>
        <td><img
        src={el.photo}
        alt="img"
        className="img-fluid"
        width={"70px"}
      ></img></td>
      <td>{el.name}</td>
      <td>{el.price * el.count}</td>
      <td>
      <div>
      <button className="btn p-0"
      onClick={() =>{
        setActiveBtn(!activeBtn)
      
        dispatch({ type: "ITEM_DIC", value: el._id })
      }}
    
      >     <i class="fa fa-minus-square text-danger"
      style={{fontSize : "25px"}}
      aria-hidden="true"></i></button>
 
      <span style={{padding : "0px 10px"}}>{el.count}</span>
      <button className="btn p-0"
      onClick={() =>{

        setActiveBtn(!activeBtn)
      
        dispatch({ type: "ITEM_INC", value: el._id })
      }}
      
      
      ><i style={{fontSize : "25px"}} class="fa fa-plus-square text-success" aria-hidden="true"></i></button>
      
      </div>   
      
      </td>
      <td><button
      className="btn btn-danger"
      onClick={() =>
        dispatch({
          type: "DELETE",
          value: el._id,
        })
      }
    >
      <i class="fa fa-trash"></i>
    </button></td>
      </tr>
    )
  })}

             
           </table>
          </div>
          <div className="col-3">
            <div className="text-center p-3 priceCard">
              <h5> Item : {ItemList.item.length}</h5>
              <h5>Quantity : {price().quantity}</h5>
              <h5>Product price : {price().sum} TK</h5>
              <h5>Weight : { weight()} KG</h5>
              <div>
                <label>Select Taransport System</label>
                <div class="form-group">
                  <select class="form-control" onChange={handleChageTransport}>
                    <option value="0">Transport</option>
                    <option value="500">SA poribahan</option>
                     <option value="1000">Truck</option>
                    <option value="1500">Home Dalivery</option>
                  </select>
                </div>


            {showDiviton && ( <>  
                <label>Select divisions</label>
                <div class="form-group">
                  <select class="form-control" onChange={handleChageDivisions}>
                    <option value="0">Divisions</option>
                    <option value="500">Chittagong</option>
                     <option value="1000">Dhaka</option>
                    <option value="1500">Barishal</option>
                    <option value="2000">Khulna</option>
                    <option value="2500">Rajshahi</option>
                    <option value="3000">Rongpur</option>
                    <option value="3500">Shylate</option>
                  </select>
                </div></> )}


             
                <h6>Delivery Charge : {deliveryCharge } Tk</h6>

                <h5>Total Cost : {transport.transportFee + price().sum}</h5>
              </div>

              
             {ItemList?.item.length !== 0 &&  (<button
                className="custom-btn btn-9 my-1"
                onClick={checkOut}
                
              >
                Next
              </button>)}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default Cart;
