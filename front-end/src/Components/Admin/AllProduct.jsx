import React from 'react'
import AllProductCart from './AllProductCart';

const AllProduct = () => {
    return (
      <div>
        <h2
          className="text-center my-5"
          style={{
            borderBottom: "2px solid black",
            width: "300px",
            margin: "0 auto",
            color: "black",
            fontWeight: "bold",
          }}
        >
         All Product
            </h2>
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1">
                    <AllProductCart></AllProductCart>
                </div>
            </div>
      </div>
    );
}

export default AllProduct
