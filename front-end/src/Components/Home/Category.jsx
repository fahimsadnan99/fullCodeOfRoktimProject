import React from 'react'

const Category = () => {
  return (
    <div style={{backgroundColor: '#C0EB36'}}>
    <div className='container tex-center'>
    <div className='row'>
    <div className='col-3 py-3 px-2'  style={{fontSize : "20px",fontWeight : "600",color : "black",textAlign : "center"}}>
    <i class="fa fa-rocket" style={{fontSize : "35px", color : "red",padding : "20px 0px"}} aria-hidden="true"></i>
    <br></br>
    Expericence <br></br>
    5 Years
    </div>
    <div className='col-3 py-3 px-2' style={{fontSize : "20px",fontWeight : "600",color : "black",textAlign : "center"}}>
   
    <i class="fa fa-heart" style={{fontSize : "35px", color : "red",padding : "20px 0px"}} aria-hidden="true"></i>
    <br></br>
    Happy Clients <br></br>
    500+
    </div>
    
    <div className='col-3 py-3 px-2' style={{fontSize : "20px",fontWeight : "600",color : "black",textAlign : "center"}}>

    <i class="fa fa-truck" style={{fontSize : "35px", color : "red",padding : "20px 0px"}} aria-hidden="true"></i>
    <br></br>

    Product Delivery <br></br> 
    7000+
    </div>

    <div className='col-3 py-3 px-2' style={{fontSize : "20px",fontWeight : "600",color : "black",textAlign : "center"}}>

    <i class="fa fa-check-circle" style={{fontSize : "35px", color : "red",padding : "20px 0px"}} aria-hidden="true"></i>
    <br></br>

    Trust <br></br>
       100%
    </div>
    </div>
    </div>
    </div>
  )
}

export default Category