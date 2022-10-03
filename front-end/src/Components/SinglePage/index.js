import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import Navbar from '../Navbar/Navbar'
import {useParams, useHistory} from "react-router-dom"
import axios from 'axios'
import { useDispatch } from "react-redux";
import Footer from '../Footer/Footer'
import Loader from "../Loader"

const SinglePage = () => {
  const [item,setItem] = useState()
  const {id} = useParams()
  const history = useHistory()
  const dispatch = useDispatch();
  

 useEffect( async()=>{
    await axios.get(`http://localhost:3002/api/product/${id}`)
      .then(res => setItem(res.data))
                      
 })

  return (
    <>

    {item ? (  <Layout title={`Product-${item?.name}`}>
    <Navbar></Navbar>

 
    
    <div className="container mt-3">
          <button className="btn btn-info" onClick={() => history.goBack()}>
                      &#11013; Go Back</button>
        <div className="row my-3">
                     
            <div className="col-10 offset-1">
                
              {item &&  <div className="row">
<div className="col-6">
                  <img src={item.photo} alt={item.name} className="img-fluid " style={{borderRadius : "10px"}}></img>
    </div>
    <div className="col-6">
                  <h2 style={{ color: "red" }}>{item.name}</h2>
                  <h4>{item.price} Tk</h4>
                  <h6>Menufecturing : {item.manufecture}</h6>
                  <h6>Single Item : {item.price / item.quantity} Tk</h6>
                  <h6>Expdate : {item.expireDate}</h6>
                  <h6>Weight : {item.weight} Kg</h6>
                  <h6>quantity : {item.quantity}</h6>
                  <p><i>{item.description}</i></p>
          <div style={{fontSize : "30px"}}>
                              <span><i className="fa fa-star" style={{color : "orange"}} aria-hidden="true"></i></span>
                              <span><i className="fa fa-star" style={{color : "orange"}} aria-hidden="true"></i></span>
                              <span><i className="fa fa-star" style={{color : "orange"}} aria-hidden="true"></i></span>
                              <span><i className="fa fa-star" style={{color : "orange"}} aria-hidden="true"></i></span>
                                  <i className="fa fa-star-half-o" style={{ color: "orange" }} aria-hidden="true"></i>
                              </div>

                  <button className=" custom-btn btn-9 mt-3" onClick={() => dispatch({ type: "ADD", value: item })} style={{width : "200px"}}><i className="fa fa-cart-plus mr-2"></i>ADD TO CART</button>

        </div>

                
                    </div>}
                
                
                </div>
        </div>
        
    </div>
        <Footer></Footer>
          </Layout>) : <Loader></Loader>}
    </>
  )
}

export default SinglePage