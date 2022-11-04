import React from 'react'
import { useHistory } from 'react-router-dom'


const BannerSection = () => {
    const history = useHistory()
  return (
    <div id="banner">
    <p className='textField'>Long Live The Heart And Bond</p>
    <br></br>
    <button onClick={()=> history.push("/shop") } className='btn mt-5'>Shop Now  <span >🡺</span>  </button>
    </div>
  )
}

export default BannerSection