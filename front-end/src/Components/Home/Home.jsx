import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import Navbar from '../Navbar/Navbar';
import Slider from './Slider';
import "./Home.css"
import BestSale from './BestSale';
import Card from './Card';
import BestSalesSlider from './BestSalesSlider';
import {getProduct} from "../../API/AllApi"
import Loader from "../Loader"
import Footer from '../Footer/Footer'



const Home = () => {
  const [product,setProduct] = useState([])
  const bestSalerProduct = product.reverse();
console.log(product);
  useEffect(() => {
    getProduct()
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  },[])
  
    return (
      <>
{!product.length ? (        <Layout title="Apon Basic Need Food Ltd">
          <Navbar></Navbar>
          <Slider></Slider>

          <BestSale title="Best Sale"></BestSale>
          <div className="container">
            <BestSalesSlider array={bestSalerProduct}></BestSalesSlider>
          </div>
          <BestSale title="New Product"></BestSale>
          <div className="container">
            <BestSalesSlider array={bestSalerProduct}></BestSalesSlider>
          </div>
         <Footer></Footer>
        </Layout>) : <Loader></Loader> }
      </>
    );
}

export default Home
