import React, { useState,useEffect, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import CartItem from "./CartItem";
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

  const ItemList = useSelector((state) => state);

  console.log( ItemList)
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

  const handleChageTransport = (e) => {
    if (e.target.value === "0")
      setTransport({
        transportSystem: "",
        transportFee: 0,
      });
    if (e.target.value === "500")
      setTransport({
        ...transport,
        transportSystem: "SA poribahan",
        transportFee: 500,
      });
    if (e.target.value === "1000")
      setTransport({
        transportSystem: "Cargo",
        transportFee: 1000,
      });
    if (e.target.value === "2000")
      setTransport({
        transportSystem: "Truck",
        transportFee: 2000,
      });
    if (e.target.value === "1500")
      setTransport({
        transportSystem: "Pic up",
        transportFee: 1500,
      });
  };



  useEffect(() => {
    if (token) {
         GetProfileData()
           .then((res) => setData(res.data))
           .catch((err) => console.log(err));
      }
     
      
      
    }, []);
  
  
  const checkOut = () => {
    if (transport.transportSystem.length === 0) {
      window.alert("Please Add Transport System");
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
      <div className="container">
        <h2
          className="text-center my-5"
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
            { ItemList?.item.map((el) => {
                return <CartItem el={el}></CartItem>;
              })}
          </div>
          <div className="col-3">
            <div className="text-center p-3 priceCard">
              <h5> Item : {ItemList.item.length}</h5>
              <h5>Quantity : {price().quantity}</h5>
              <h5>Product price : {price().sum} TK</h5>
              <div>
                <label>Select Taransport System</label>
                <div class="form-group">
                  <select class="form-control" onChange={handleChageTransport}>
                    <option value="0">Transport</option>
                    <option value="500">SA poribahan</option>
                    <option value="1000">Cargo</option>
                    <option value="2000">Truck</option>
                    <option value="1500">Pic up</option>
                  </select>
                </div>
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
