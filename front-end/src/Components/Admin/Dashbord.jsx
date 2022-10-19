import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import { userInfo } from "../../utils/auth";
import CreateCatagory from "./CreateCatagory";
// import CreateProduct from "./CreateProduct";
import ProductCreate from "./ProductCreate";
import AllProduct from "./AllProduct";
import Footer from '../Footer/Footer'
import AdminInfo from "./AdminInfo";
import UserInfo from "./UserInfo";
import Order from "./Order";









const AdminDashbord = () => {
  const [numberOfComponents,setNumberOfComponents] = useState(0)
  const menu = ["Admin Info","All Product"," All User Info","Order"]
  



  
 const components = (ind)=>{
  if(ind == 0){
    return <AdminInfo></AdminInfo>
  }else if(ind == 1){
    return (
      <div className="col-8 ">
              <AllProduct></AllProduct>
        </div>
    )
  }else if(ind == 2){
    return (<UserInfo></UserInfo>)
  }else if(ind == 3){
    return(<Order></Order>)
  }
}


useEffect(()=>{
 components(0)
},[])
  return (
    <>
      <Layout title="Admin dashbord">
        <Navbar></Navbar>
        <div className="row " style={{paddingTop : "100px"}}>
          <div className="col-md-2">
            <ul class="list-group">
              <li class="list-group-item active">Menu</li>
             
              <li class="list-group-item">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{ width: "150px" }}
                >
                  Create Catagory
                </button>
                <CreateCatagory></CreateCatagory>
              </li>
              <li class="list-group-item">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#ProductCreate"
                  style={{ width: "150px" }}
                >
                  Create Products
                </button>
                {/* <CreateProduct></CreateProduct> */}
                <ProductCreate></ProductCreate>
              </li>

              {menu?.map((el,index) =>{
                return (
                  <li className="list-group-item">
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ width: "150px" }}
                    onClick={()=> setNumberOfComponents(index)}
                   
                  >
                    {el}
                  </button>
                </li>
                )
              })}
             
          
            </ul>
          </div>


        
   
        {components(numberOfComponents)}




        </div>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default AdminDashbord;


     //  adminInfo(name,email,role)
   

         
        //     <div className="col-8 ">
        //       <AllProduct></AllProduct>
        //     </div>
         




        // <h1>Hi</h1>