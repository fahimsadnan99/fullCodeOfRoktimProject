import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';
import Card from '../Home/Card';
import CheckBox from './CheckBox';
import Loader from "../Loader"
import Footer from '../Footer/Footer'
import {
  getProduct,
  getProductDetails,
  GetCatagory,
  getFilterProducts,
} from "../../API/AllApi";
import { API } from '../../utils/config';
import axios from 'axios';
const Shop = () => {

  const [products, setProducts] = useState([]);
  const [catagorys, setCatagorys] = useState("");
  const [order, setOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("");
  const [limit, setLimit] = useState(30);
   const [skip, setSkip] = useState(0);
   const [filters, setFilters] = useState({
     catagory: [],
     price: [],
   });
 
  
  const handleFilter = (myFilter, filterBy) => {
    const newFilters = { ...filters };
    if (filterBy === "catagory") {
      newFilters[filterBy] = myFilter;
    }
    setFilters(newFilters);
    getFilterProducts(skip, sortBy, order, limit, newFilters)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => console.log(err));
  };
  
   useEffect(() => {
       GetCatagory()
         .then((response) => setCatagorys(response.data))
         .catch((err) => console.log(err));
   }, []);
  
  useEffect(() => {
     getProduct(sortBy, order, limit)
       .then((res) => setProducts(res.data))
       .catch((err) => console.log(err));
  },[sortBy,order,limit])
  
 

    return (
     <>
        {products.length ? (
          
           <Layout title="Shop Page">
        <Navbar></Navbar>
          <div className="row m-0">
          <div className="col-3 ">
            <div className="row">
                  <div className="col-12 mt-5">
                <div className="d-flex">
                  Product:
                  <select
                    className="form-control form-control-sm"
                    style={{ width: "200px", marginLeft: "20px" }}
                    onChange={(e) => setOrder(e.target.value)}
                  >
                    <option value="desc">High To Low</option>
                    <option value="aesc">Low to High</option>
                  </select>
                </div>
              </div>
                  <div className="col-12 ">
                <div className="d-flex">
                  SortBy:
                  <select
                    className="form-control form-control-sm"
                    style={{ width: "200px", marginLeft: "29px" }}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="createdBy">createdBy</option>
                    <option value="price">price</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex">
                  limit :
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    style={{ width: "200px", marginLeft: "41px" }}
                    onChange={(e) => setLimit(e.target.value)}
                  ></input>
                </div>
              </div>
          

                  <div className="col-12 mt-3 ">
                {catagorys && (
                  <ul>
                    <CheckBox
                      catagorys={catagorys}
                      handleFilter={(myFilter) =>
                        handleFilter(myFilter, "catagory")
                      }
                    ></CheckBox>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row m-0">
              {products &&
                products.map((item) => {
                  return (
                    <div className="ml-3">
                      <Card item={item}></Card>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

            <Footer></Footer>
          </Layout>
        ) : (<Loader></Loader>)}
      </>
    );
}

export default Shop
