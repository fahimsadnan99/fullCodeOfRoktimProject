import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import { userInfo } from "../../utils/auth";
import Profile from "./Profile";
import { GetProfileData } from "../../API/AllApi"
import {NavLink} from "react-router-dom"
import Footer from '../Footer/Footer'
import { useSelector } from "react-redux";

const Dashbord = () => {
  const [data, setData] = useState()
  const [PurchaseHistory,setPurchaseHistory] = useState(false)
  const { name, email, role } = userInfo();
  const itemList = useSelector((state) => state);

  useEffect(() => {
  GetProfileData()
    .then(res => setData(res.data))
  .catch(err => console.log(err))

    console.log(itemList);
},[])


  return (
    <>
      <Layout title="user dashbord">
        <Navbar></Navbar>
        <div className="row mt-3">
          <div className="col-md-3">
            <ul class="list-group">
              <li class="list-group-item active">User Link</li>
              <li class="list-group-item">
                <NavLink
                  to="/cart"
                  href="#"
                  type="button"
                  class="btn btn-primary"
                >
                  My Cart
                </NavLink>
              </li>
              <li class="list-group-item">
                <a
                  href="#"
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#Profile"
                >
                  Update Profile
                </a>
                <Profile el={data}></Profile>
              </li>

              <li class="list-group-item">
                <button
               
                  type="button"
                  class="btn btn-primary"
                  onClick={() => setPurchaseHistory(!PurchaseHistory)}
                >
                  Purchase History
                </button>
              </li>
            </ul>
          </div>

          <div className="col-md-6 offset-md-1">
            <ul class="list-group">
              <li class="list-group-item active">User Information</li>
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
         {PurchaseHistory && (<div className="col-md-8 offset-md-2 mt-3">
            {itemList?.buyProduct.length == 0 &&  (<h4 className="color-warning">No Item Found</h4>)}
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">image</th>
                  <th scope="col">Name</th>

                </tr>
              </thead>
              <tbody>
                {  itemList?.buyProduct.map((product,index) => {
              return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td style={{padding : "5px 0px"}}><img src={product.photo} style={{ width : "50px"}} className="img-fluid"  alt={product.name}></img></td>
                  <td><h6>{product.name}</h6></td>
                  </tr>

               )
            })}
        </tbody>
     </table>
            
           
          </div>
          )}
        </div>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default Dashbord;
