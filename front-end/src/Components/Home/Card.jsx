import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory()

  console.log(item);

  return (
    // <div class="card mt-3" style={{ width: "250px", height: "380px" }}>
    //   <img src={item.photo} class="card-img-top" alt="card img" />
    //   <div class="card-body">
    //     <h6 class="card-title">{item.name}</h6>
    //     <div className=" card_price">
    //       <p className="mb-0">Price : {item.price} TK</p>
    //       <small>quantity : {item.quantity}</small>
    //     </div>

    //     <button
    //       className="btn btn-outline-danger"
    //       onClick={() => dispatch({ type: "ADD", value: item })}
    //     >
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>

    <div id="wrapper">
      <div id="container">
        <div class="top">
          <img src={item.photo} alt="logo" />
        </div>
        <div class="bottom">
          <div class="left">
            <div class="details">
              <p>{item.name}</p>
            </div>

            <div

              className="buy"

            >
              <i className="material-icons" onClick={() => history.push(`/productDetails/${item._id}`)}> remove_red_eye</i>

            </div>




          </div>
        </div>
      </div>
      <div class="inside">
        <div class="icon">
          <i class="material-icons">info_outline</i>
        </div>
        <div class="contents">
        <h4 style={{borderBottom : "2px solid #669999",color : "black"}}> {item.name}</h4>
          <table>
        
            <tr>
              
              <h5>Price : <span >{item.price} </span> TK</h5>
             
            </tr>
            <tr>
              <th>quantity : </th>
              <th> {item.quantity} unit</th>
            </tr>

            <tr>
              <th> Manufacturing: </th>
              <th> {item.manufecture}</th>
            </tr>

            <tr>
              <th> ExpDate: </th>
              <th> {item.expireDate}</th>
            </tr>

            
            <tr>
              <th> Weight : </th>
              <th> {item.weight} kg</th>
            </tr>




          </table>




          {/* 
            <button class="custom-btn btn-9">Quick View</button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
