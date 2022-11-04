import React from 'react'

const Category = () => {
  const contecnt = [{text : "Expericence",number : "5 Years", icon : "fa fa-rocket"},
  {text : "Happy Clients",number : "500+", icon : "fa fa-heart"},

  {text : "Product Delivery",number : "7000+", icon : "fa fa-truck"},
  {text : "Trust",number : "100%", icon : "fa fa-check-circle"}
]
  return (
    <div className='categoriSection'>
    <div className='container tex-center'>
    <div className='row'>
     {
      contecnt.map(el=>{
        return (
          <div className='col-3 d-inline-block ServiceField p-2'>
           <i class={el.icon} style={{fontSize : "50px", color : "white",padding : "20px 0px"}} aria-hidden="true"></i>
           <p>{el.text}</p>
           <p>{el.number}</p>
          </div>
        )
      })
     }
    </div>
    </div>
    </div>
  )
}

export default Category


// <i class="fa fa-rocket" style={{fontSize : "35px", color : "red",padding : "20px 0px"}} aria-hidden="true"></i>

// <i class="fa fa-check-circle" style={{fontSize : "35px", color : "red",padding : "20px 0px"}} aria-hidden="true"></i>

// <i class="fa fa-truck" style={{fontSize : "35px", color : "red",padding : "20px 0px"}} aria-hidden="true"></i>

// <i class="fa fa-heart" style={{fontSize : "35px", color : "red",padding : "20px 0px"}} aria-hidden="true"></i>