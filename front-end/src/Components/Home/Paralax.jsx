import React from 'react'
import { useHistory } from 'react-router-dom'


const Paralax = () => {
    const history = useHistory()
  return (
    <div className='paralax'>
    <p className='paralax1'>Food is not rational. <br></br>
    Food is 
culture, habit, craving, and identity</p>

<button onClick={()=> history.push("/shop") } className='btn mt-5 paralaxBtn'>Shop Now  <span >🡺</span>  </button>
    </div>
  )
}

export default Paralax