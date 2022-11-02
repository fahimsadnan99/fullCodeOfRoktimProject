import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

const Card1 = ( {item }) => {
    const dispatch = useDispatch();
    const history = useHistory()


  return (
    <div>
    <div className="card">
    <img src="./img5.jpg" alt="img"/>
    </div>
    <p style={{color : "blue"}}>Name : Apon Poteto</p>
    <p>price : 10tk</p>
    <button className="btn btn-warning">See Details</button>
    </div>
  )
}

export default Card1