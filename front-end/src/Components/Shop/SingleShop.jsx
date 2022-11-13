import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import Card from "../Home/Card"


const SingleShop = () => {
   const [item,setItem] = useState()
  const BrandName = useSelector(state => state.brand)
  console.log(BrandName);

 
    useEffect(()=>{
       axios.get(`http://localhost:3002/api/product/brand/${BrandName}`)
       .then(res=> setItem(res.data))
       .catch((err) => console.log(err))
       
       
    },[])

console.log(item);
  return (
    <>
    <div>
    <Layout title="Apon Basic Need Food Ltd">
    <Navbar></Navbar>
    </Layout>
    </div>
    <div style={{paddingTop : "100px"}}>
    
   
    <h4 style={{fontWeight : "bold", borderBottom : "2px solid black",width : "300px",margin : "0 auto", textAlign : "center"}}>This Is <span style={{textTransform : "capitalize"}}>{BrandName}</span> Shop</h4>

    <div className='container mt-3'>
     <div className='row'>

     {item?.map(item =>{
      return <div className='col-md-4'>
       <Card item={item}></Card>
      </div>
     })}
     
     </div>
    </div>
    </div>
    </>
  )
}

export default SingleShop