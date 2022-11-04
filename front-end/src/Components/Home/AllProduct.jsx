import React from 'react'
import Card from "./Card"

const AllProduct = ({array}) => {
  return (
    
    <div className='row'>
    
    {array &&
        array.slice(0,7).map((item) => {
          return (
            <div className='col-md-3'>
              <Card item={item}></Card>
              </div>
          ); 
        })}

    </div>
    
   
  )
}

export default AllProduct