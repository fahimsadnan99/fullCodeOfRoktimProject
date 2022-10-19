import React, { useEffect, useState } from 'react'
import { userInfo } from "../../utils/auth";
import axios from 'axios';
import userImg from "../../assets/img/user.svg"
import ProductImg from "../../assets/img/Basket.svg"
import { getProduct } from "../../API/AllApi";

const AdminInfo = () => {
    const [userData,setUserData] = useState("")
    const [product,setProduct] = useState("")
    const { name, email, role } = userInfo();

    
    
useEffect(()=>{

    axios.get("http://localhost:3002/api/user/allUser")
    .then(res => setUserData(res.data))

    getProduct()
    .then((res) => setProduct(res.data))

},[])
  return (
    <div className="col-md-8 ">
    <div className='row'>
    <div className='col-12'>
    <ul class="list-group">
      <li class="list-group-item active">User Information</li>
      <li class="list-group-item">Name : {name} </li>
      <li class="list-group-item">Email : {email}</li>
      <li class="list-group-item">Role : {role} </li>
    </ul>
    </div>

    <div className='col-12' style={{marginLeft : "15px"}}>
    
    <div className='row mt-3'>
     <div className='col-3 card text-center'>
    
     <div className="p-1">
     <h3>Total User</h3>
     <div  >
     <img src={userImg} alt="userImg" style={{width : "70px", height : "70px"}}></img>
     </div>
     <div>
     <h1 style={{fontWeight : "700"}}>{userData?.length ? userData?.length : "Loading..."}</h1>
     </div>
     </div>
     </div>
    



     <div className='col-3 card text-center ml-3'>
    
     <div className="p-1">
     <h3>Total Product</h3>
     <div  >
     <img src={ProductImg} alt="userImg" style={{width : "70px", height : "70px"}}></img>
     </div>
     <div>
     <h1 style={{fontWeight : "700"}}>{product?.length ? product?.length : "Loading..."}</h1>
     </div>
     </div>
     </div>


    </div>
    
    </div>
    </div>
  </div>
  )
}

export default AdminInfo