import React from 'react'

const BestSale = ({ title}) => {
    return (
      <>
        <div className=" mt-5 pt-4  mb-3 container">
          <div className="text-center">
            <p
              className="headerTitle"
              style={{ color: " rgba(202, 31, 31, 0.918)" }}
            >
              {title}
            </p>
            <div>
              <i className="fa fa-star bestSaleStart" aria-hidden="true"></i>
              <i
                className="fa fa-star bestSaleStart m-2"
                aria-hidden="true"
              ></i>
              <i className="fa fa-star bestSaleStart " aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </>
    );
}

export default BestSale
