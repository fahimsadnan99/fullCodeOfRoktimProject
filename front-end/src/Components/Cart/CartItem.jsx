import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const CartItem = ({ el }) => {
  const [count,setCount] = useState(1)
  const dispatch = useDispatch();
  
 console.log(el);
    const sum = el.price * el.count;
 
    return (
      <div className=" my-2">
        <div className="cart_Card">
          <img
            src={el.photo}
            alt="img"
            className="img-fluid"
            width={"70px"}
          ></img>
          <p>{el.name}</p>
          <p>{sum}Tk </p>
          <div className="cardIncre">
            <span
              className="btn btn-info"
              onClick={() =>
                dispatch({ type: "ITEM_INC", value: el._id })
              }
            >
              +
            </span>
            <input
              type="number"
              className="text-center"
              style={{ width: "100px", fontWeight: "bold" }}
              value={el.count}
            ></input>
            <span
              className="btn btn-info"
              onClick={() =>
                dispatch({ type: "ITEM_DIC", value: el._id })
              }
            >
              -
            </span>
          </div>

          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch({
                type: "DELETE",
                value: el._id,
              })
            }
          >
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
}

export default CartItem
