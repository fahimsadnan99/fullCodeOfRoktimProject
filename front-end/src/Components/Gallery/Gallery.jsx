import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';
import DemoData from './DemoData';
import Footer from '../Footer/Footer'

const Gallery = () => {
 
  const [numberCount, setNumberCount] = useState(1)
  
  
  const buttonOne = () => {
   setNumberCount(1)
 }
  
   const buttonTwo = () => {
     setNumberCount(2);
   };
   
   const buttonThree = () => {
     setNumberCount(3);
   };
  console.log(numberCount);
    return (
      <Layout title="Gallery Page">
        <Navbar></Navbar>
        <div className="container mt-5">
          <nav class="nav nav-pills nav-fill">
            <a
              style={{ fontWeight: "bold" }}
              className={`nav-item nav-link ${numberCount == 1 && "active"}`}
              onClick={buttonOne}
            >
              IMAGE
            </a>
            <a
              style={{ fontWeight: "bold" }}
              className={`nav-item nav-link ${numberCount == 2 && "active"}`}
              onClick={buttonTwo}
            >
              VIDEO
            </a>
            <a
              style={{ fontWeight: "bold" }}
              className={`nav-item nav-link ${numberCount == 3 && "active"}`}
              onClick={buttonThree}
            >
              ADVERTISEMENT
            </a>
          </nav>
          <div>
            <div className="row">
              {numberCount == 1 &&
                DemoData.map((el) => {
                  return (
                    <div className="col-4 my-1">
                      <div className="card">
                        <img
                          src={el.img}
                          alt="img"
                          style={{ width: "100%" }}
                          className="card-img"
                        />
                      </div>
                    </div>
                  );
                })}

              {numberCount == 2 &&
                DemoData.map((el) => {
                  return (
                    <div className="col-4 my-1">
                      <div className="card">
                        <iframe
                          src={el.video}
                          alt="img"
                          style={{ width: "100%" }}
                          className="card-img"
                        ></iframe>
                      </div>
                    </div>
                  );
                })}

              {numberCount == 3 &&
                DemoData.map((el) => {
                  return (
                    <div className="col-4 my-1">
                      <div className="card">
                        <img
                          src={el.add}
                          alt="img"
                          style={{ width: "100%" }}
                          className="card-img"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </Layout>
    );
}

export default Gallery
