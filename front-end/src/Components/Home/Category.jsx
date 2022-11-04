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
          <div className='col-3  d-inline-block ServiceField p-2'>
           <i class={el.icon} style={{fontSize : "50px", color : "yellow",padding : "20px 0px",textShadow : "2px 10px 10px black" }} aria-hidden="true"></i>
           <p style={{textShadow : "2px 5px 10px rgba(0,0,0,0.3)"}}>{el.text}</p>
           <p style={{textShadow : "2px 5px 10px rgba(0,0,0,0.3)"}}>{el.number}</p>
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


