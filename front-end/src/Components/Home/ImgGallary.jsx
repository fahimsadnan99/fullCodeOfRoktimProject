import React from 'react'
import img1 from "../../assets/img/g2.jpeg"
import img2 from "../../assets/img/g1.jpeg"
import img3 from "../../assets/img/g3.jpeg"
import img4 from "../../assets/img/g4.jpeg"
import img5 from "../../assets/img/g5.jpeg"
import img6 from "../../assets/img/office.jpeg"



const ImgGallary = () => {
  return (
    <div className='container my-5'>
      <div className='row'>
      <div className='col-6'>
      <img src={img1} alt="img1" className='img-fluid w-100 h-100'></img>
      </div>
      <div className='col-3'>
      <img src={img2} alt="img1" className='img-fluid w-100 h-100'></img>
      </div>

      <div className='col-3'>
      <img src={img3} alt="img1" className='img-fluid w-100 h-100'></img>
      </div>
      </div>
      <div className='row my-3' >
      <div className='col-4' style={{height : "300px"}}>
      <img src={img4} alt="img1" className='img-fluid w-100 h-100'></img>
      </div>
      <div className='col-4' style={{height : "300px"}}>
      <img src={img5} alt="img1" className='img-fluid w-100 h-100'></img>
      </div>
      <div className='col-4' style={{height : "300px"}}>
      <img src={img6} alt="img1" className='img-fluid w-100 h-100'></img>
      </div>
      </div>
    </div>
  )
}

export default ImgGallary