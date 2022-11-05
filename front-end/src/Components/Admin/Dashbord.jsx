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
import "./Dbord.css"
import Logo from "../../assets/img/logox.png"









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
        <div className="row " style={{paddingTop : "100px",fontFamily : "Patua One",textAlign : "center",}}>
          <div className="col-md-2 " style={{background: "#720707",borderRadius : "10px"}} >
          <img src={Logo} alt="logo" style={{width : "100px",textShadow : "2px 5px 10px black"}} />
            <ul class="" >
              <li class="" style={{zIndex : "0",backgroundColor : "yellow",color : "black",fontWeight : "bold",padding : "10px", borderRadius : "10px",boxShadow : "2px 2px 10px black"}}>Menu</li>
             
              <li class="">
                <button
                  type="button"
                  class="btn "
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{ backgroundColor : "white",color : "black",fontWeight : "bold",padding : "10px", borderRadius : "10px",boxShadow : "2px 2px 10px black",width : "100%",marginTop : "10px"}}
                >
                  Create Catagory
                </button>
                <CreateCatagory></CreateCatagory>
              </li>
              <li class="">
                <button
                  type="button"
                  class="btn "
                  data-toggle="modal"
                  data-target="#ProductCreate"
                  style={{ backgroundColor : "white",color : "black",fontWeight : "bold",padding : "10px", borderRadius : "10px",boxShadow : "2px 2px 10px black",width : "100%",marginTop : "10px" }}
                >
                  Create Products
                </button>
                {/* <CreateProduct></CreateProduct> */}
                <ProductCreate></ProductCreate>
              </li>

              {menu?.map((el,index) =>{
                return (
                  <li className="">
                  <button
                    type="button"
                    class="btn "
                    style={{ backgroundColor : "white",color : "black",fontWeight : "bold",padding : "10px", borderRadius : "10px",boxShadow : "2px 2px 10px black", width : "100%",marginTop : "10px" }}
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