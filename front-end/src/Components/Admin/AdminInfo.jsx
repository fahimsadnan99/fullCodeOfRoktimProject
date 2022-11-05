import React, { useEffect, useState } from "react";
import { userInfo } from "../../utils/auth";
import axios from "axios";
import userImg from "../../assets/img/user.svg";
import ProductImg from "../../assets/img/Basket.svg";
import orderImg from "../../assets/img/order.png";
import onGoingImg from "../../assets/img/onGoing.png";
import DoneImg  from "../../assets/img/orderDone.png";
import pendingImg from "../../assets/img/pending.png"
import { getProduct } from "../../API/AllApi";

const AdminInfo = () => {
  const [userData, setUserData] = useState("");
  const [product, setProduct] = useState("");
  const { name, email, role } = userInfo();
  const [info, setInfo] = useState("");


  const onGoingOrder = ()=>{
    let onGoingList = []
    let pendingList = []
    let doneList = []
    if(info.length){
      info.map((e,index) =>{
        if(e.status == "On Going"){
          onGoingList.push(index)
        }
        if(e.status == "Pending"){
          pendingList.push(index)
        }
        if(e.status == "Done"){
          doneList.push(index)
        }
        
      })
    }
   

    return {onGoingList,pendingList,doneList}
  }



  useEffect(() => {
    axios.get("http://localhost:3002/api/user/allUser").then((res) => setUserData(res.data));

    getProduct().then((res) => setProduct(res.data));

    axios.get("http://localhost:3002/api/order").then((res) => setInfo(res.data));
  }, []);
  return (
    <div className="col-md-8 " style={{zIndex : "0"}}>
      <div className="row">
        <div className="col-12">
          <ul class="list-group" style={{listStyle : "none"}}>
            <li style={{backgroundColor : "#720707", color : "white" ,padding : "20px 20px",fontWeight : "bold",fontFamily : "Patua One",fontSize : "25px",borderTopLeftRadius : "8px", borderTopRightRadius : "8px"}}>User Information</li>
            <li class="list-group-item">Name : {name} </li>
            <li class="list-group-item">Email : {email}</li>
            <li class="list-group-item">Role : {role} </li>
          </ul>
        </div>

        <div className="col-12" style={{ marginLeft: "15px" }}>
          <div className="row mt-3">
            <div className="col-3 card text-center orderCard">
              <div className="p-1">
                <h3>Total User</h3>
                <div>
                  <img src={userImg} alt="userImg" style={{ width: "70px", height: "70px" }}></img>
                </div>
                <div>
                  <h1 style={{ fontWeight: "700" }}>
                    {userData?.length ? userData?.length : "Loading..."}
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-3 card text-center ml-3 orderCard" >
              <div className="p-1">
                <h3>Total Product</h3>
                <div>
                  <img
                    src={ProductImg}
                    alt="userImg"
                    style={{ width: "70px", height: "70px" }}
                  ></img>
                </div>
                <div>
                  <h1 style={{ fontWeight: "700" }}>
                    {product?.length ? product?.length : "Loading..."}
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-3 card text-center ml-3 orderCard">
              <div className="p-1">
                <h3>Total Order</h3>
                <div>
                  <img src={orderImg} alt="userImg" style={{ width: "70px", height: "70px" }}></img>
                </div>
                <div>
                  <h1 style={{ fontWeight: "700" }}>
                    {info?.length ? info?.length : "Loading..."}
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-3 mt-2 card text-center orderCard ">
            <div className="p-1">
              <h3>Order Pending</h3>
              <div>
                <img src={pendingImg} alt="userImg" style={{ width: "70px", height: "70px" }}></img>
              </div>
              <div>
                <h1 style={{ fontWeight: "700" }}>
                  {info?.length ? onGoingOrder().pendingList.length : "Loading..."}
                </h1>
              </div>
            </div>
          </div>


            <div className="col-3 mt-2 card text-center ml-3 orderCard">
            <div className="p-1">
              <h3>Order On Going</h3>
              <div>
                <img src={onGoingImg} alt="userImg" style={{ width: "70px", height: "70px" }}></img>
              </div>
              <div>
                <h1 style={{ fontWeight: "700" }}>
                  {info?.length ? onGoingOrder().onGoingList.length : "Loading..."}
                </h1>
              </div>
            </div>
          </div>





          <div className="col-3 mt-2 card text-center ml-3 orderCard">
          <div className="p-1">
            <h3>Order Done</h3>
            <div>
              <img src={DoneImg} alt="userImg" style={{ width: "70px", height: "70px" }}></img>
            </div>
            <div>
              <h1 style={{ fontWeight: "700" }}>
                {info?.length ? onGoingOrder().doneList.length : "Loading..."}
              </h1>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInfo;
