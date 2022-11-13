import React from 'react'
import {useHistory} from "react-router-dom"
import { useDispatch } from "react-redux";
import Logox from "../../assets/img/logox.png"
import Pran from "../../assets/img/pran.png"
import Bosundhora from "../../assets/img/bosundora.png"



const Brand = () => {
    const history = useHistory()
    const dispatch = useDispatch()
  return (
 
    <div className='row my-3'>
    <div className='col-md-4 card'
    onClick={()=> {
        dispatch({ type: "BRAND", value: "apon" })
        history.push("/brandShop", {value : "apon"})
      }}
    
    >
    <div>
    <img src={Logox} alt="apon" className='img-fluid' />
    </div>
    </div>
    



    <div className='col-md-4 card'
    
    onClick={()=> {
  dispatch({ type: "BRAND", value: "pran" })
  history.push("/brandShop", {value : "pran"})}
}
    
    >
    <div>
    <img src={Pran} alt="apon" className='img-fluid' />
    </div>
    </div>


    <div className='col-md-4 card'
    
    onClick={()=> {
  dispatch({ type: "BRAND", value: "bosundhora" })
  history.push("/brandShop", {value : "bosundhora"})}
}
    
    
    >
    <div>
    <img src={Bosundhora} alt="apon" className='img-fluid' />
    </div>
    </div>
    </div>
   
   
  )
}

export default Brand




// <div>
// <button className='btn btn-primary' onClick={()=> {
//   dispatch({ type: "BRAND", value: "apon" })
//   history.push("/brandShop", {value : "apon"})}
  
// }>Apon Shop</button>
// <button className='btn btn-primary'

// onClick={()=> {
//   dispatch({ type: "BRAND", value: "pran" })
//   history.push("/brandShop", {value : "pran"})}
// }
// >Pran Shop</button>

// <button className='btn btn-primary'

// onClick={()=> {
//   dispatch({ type: "BRAND", value: "bosundhora" })
//   history.push("/brandShop", {value : "bosundhora"})}
// }
// >Boshundora Shop</button>
// </div>