import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {useSelector} from "react-redux"

const Order = () => {
  const [info,setInfo] = useState()
  const [paid,setPaid] = useState()
  const [status,setStatus] = useState()

  const item = useSelector((state)=> state)

  console.log("item", item);
  
  




  const productWeight = (e)=>{
     let weight = 0;
   
     e.item?.map(el=>{
      weight += el.tempWeight
      
     })
     return weight 
  }

  const handlePaidChange =(id,value)=>{
   
    setPaid(value)
    axios.patch(`http://localhost:3002/api/order/paid/${id}`, {paid : value})
  }


  const updateStatus = (id,value)=>{
    setStatus(value)
    console.log(id,value);
    axios.patch(`http://localhost:3002/api/order/status/${id}`, {status : value})
  }

  useEffect(()=>{
  axios.get('http://localhost:3002/api/order')
  .then(res => setInfo(res.data))
  },[])

  useEffect(()=>{
    axios.get('http://localhost:3002/api/order')
  .then(res => setInfo(res.data))
  },[paid,status])


  console.log(info);
  return (
    <div className='col-10'>
    <div className=" mb-2">
       
     

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
              <tr>
            <td>{el.email}</td>
            <td>{
              el?.item?.map(e =>{
                return e.name + ", "
              })
            }</td>
            <td>{productWeight(el)}Kg</td>
            <td>{el.totalPrice}/-</td>
            <td>
            <select class="form-control" value={el.paid} onChange={ (e)=> handlePaidChange(el._id,e.target.value) }>
            <option value="No" style={{color : "red",fontStyle : "italic",fontWeight : "bold"}}>No</option>
            <option value="Yes"  style={{color : "green",fontStyle : "italic",fontWeight : "bold"}}
            >Paid</option>
          </select>
          </td>

          <td>
         {el.city} , {el.address}
          </td>
          <td>
          <select class="form-control" value={el.status} onChange={(e)=> updateStatus(el._id,e.target.value)}>
          <option value="Pending" style={{color : "red",fontStyle : "italic",fontWeight : "bold"}}>Pending</option>
          <option value="On Going" style={{color : "yellow",fontStyle : "italic",fontWeight : "bold"}}>On Going</option>
          <option value="Done" style={{color : "green",fontStyle : "italic",fontWeight : "bold"}}
          >Done</option>
        </select>
          
          </td>
            </tr>




           
              </>
            )
          })}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Order