import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import { userInfo } from "../../utils/auth";
import Profile from "./Profile";
import { GetProfileData } from "../../API/AllApi"
import {NavLink} from "react-router-dom"
import Footer from '../Footer/Footer'
import { useSelector } from "react-redux";
import axios from "axios";
import Logo from "../../assets/img/logox.png"

const Dashbord = () => {
  const [data, setData] = useState()
  const [PurchaseHistory,setPurchaseHistory] = useState(false)
  const [info,setInfo] = useState()
  const { name, email, role, _id } = userInfo();
  const itemList = useSelector((state) => state);

  


  const productWeight = (e)=>{
    let weight = 0;
  
    e.item?.map(el=>{
     weight += el.tempWeight
     
    })
    return weight 
 }


  useEffect(() => {
  GetProfileData()
    .then(res => setData(res.data))
  .catch(err => console.log(err))

    axios.get(`http://localhost:3002/api/order/${_id}`)
    .then(res => setInfo(res.data))

    
},[])


  return (
    <>
    <div className="user-deshbord">
      <Layout title="user dashbord">
        <Navbar></Navbar>
        <div className="row" style={{paddingTop : "100px"}}>
          <div className="col-md-3 " style={{backgroundColor : "#720707",borderRadius : "5px" }}>
 <img src={Logo} alt="img"  style={{width : "100px", marginLeft :  "100px" }} />

            <ul class="list-group " >
              <li style={{backgroundColor : "yellow", marginBottom : "10px", borderRadius : "5px",textAlign : "center", fontWeight : "bold", fontSize : "18px", padding : "10px"}}>User Link</li>
              <li style={{backgroundColor : "white", margin : "5px 0px", borderRadius : "5px",textAlign : "center", fontWeight : "bold", fontSize : "20px"}}>
                <NavLink
                  to="/cart"
                  href="#"
                  type="button"
                  class="btn "
                >
                  My Cart
                </NavLink>
              </li>
              <li style={{backgroundColor : "white", margin : "5px 0px", borderRadius : "5px",textAlign : "center", fontWeight : "bold", fontSize : "20px"}}>
                <a
                  href="#"
                  type="button"
                  class="btn "
                  data-toggle="modal"
                  data-target="#Profile"
                >
                  Update Profile
                </a>
                <Profile el={data}></Profile>
              </li>

              <li style={{backgroundColor : "white", margin : "5px 0px", borderRadius : "5px",textAlign : "center", fontWeight : "bold", fontSize : "20px"}}>
                <button
               
                  type="button"
                  class="btn "
                  onClick={() => setPurchaseHistory(!PurchaseHistory)}
                >
                  Purchase History
                </button>
              </li>
            </ul>
          </div>

        
         <div className="row">
         
         <div className="col-md-80  m-auto">

          


            <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Product</th>
                <th scope="col">KG</th>
                <th scope="col">Tk</th>
                <th scope="col">Paid</th>
                <th scope="col">Address</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
            {info?.map(el =>{
              return (
                <>
                <tr style={{backgroundColor : "#720707",color : "#fff"}}>
              <td>{el.email}</td>
              <td>{
                el?.item?.map(e =>{
                  return e.name + ", "
                })
              }</td>
              <td>{productWeight(el)}Kg</td>
              <td>{el.totalPrice}/-</td>
              <td>
           {el.paid}
            </td>
  
            <td>
           {el.city} , {el.address}
            </td>
            <td>
         {el.status}
            
            </td>
              </tr>
  
  
  
  
             
                </>
              )
            })}
              
            </tbody>
          </table>
            </div>


            <div className="col-md-9 m-auto">
            <ul class="list-group">
              <li style={{backgroundColor : "#720707", listStyle : "none",
            fontSize : "20px", color : "#fff", padding : "20px",borderTopRightRadius : "5px",borderTopLeftRadius : "5px"}}>User Information</li>
              <li class="list-group-item">Name : {name} </li>
              <li class="list-group-item">Email : {email}</li>
              <li class="list-group-item">City : {data ? data.city : "N/A"}</li>
              <li class="list-group-item">
                Address :{data ? data.address : "N/A"}
              </li>
              <li class="list-group-item">
                Phone : {data ? data.phone : "N/A"}
              </li>
              <li class="list-group-item">
                postCode :{data ? data.postCode : "N/A"}
              </li>
              <li class="list-group-item">Role : {role} </li>
            </ul>
          </div>

         </div>
      
            
        


          
         
        </div>
        <Footer></Footer>
      </Layout>
      </div>
    </>
  );
};

export default Dashbord;


