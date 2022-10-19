import React from 'react'

const Order = () => {
  return (
    <div className='col-10'>
    <div className=" mb-2">
       
     

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Product</th>
              <th scope="col">KG</th>
              <th scope="col">Tk</th>
              <th scope="col">Paid</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Roktim@gmail.com</td>
            <td>Apon Milk,Apon Coil</td>
            <td>50Kg</td>
            <td>3350/-</td>
            <td>
            <select class="form-control">
            <option style={{color : "red",fontStyle : "italic",fontWeight : "bold"}}>No</option>
            <option  style={{color : "green",fontStyle : "italic",fontWeight : "bold"}}
            >Paid</option>
          </select>
          </td>

          <td>
          Ak Khan,Chittagong
          </td>
          <td>
          <select class="form-control">
          <option style={{color : "red",fontStyle : "italic",fontWeight : "bold"}}>panding</option>
          <option style={{color : "yellow",fontStyle : "italic",fontWeight : "bold"}}>on Going</option>
          <option  style={{color : "green",fontStyle : "italic",fontWeight : "bold"}}
          >Done</option>
        </select>
          
          </td>
            </tr>




            <tr>
            <td>Concol@gmail.com</td>
            <td>Apon Solt,Apon Chocolate</td>
            <td>220Kg</td>
            <td>5550/-</td>
            <td>
            <select class="form-control">
            <option style={{color : "red",fontStyle : "italic",fontWeight : "bold"}}>No</option>
            <option  style={{color : "green",fontStyle : "italic",fontWeight : "bold"}}
            >Paid</option>
          </select>
          </td>

          <td>
          Boddarhat,Chittagong
          </td>
          <td>
          <select class="form-control">
          <option style={{color : "red",fontStyle : "italic",fontWeight : "bold"}}>panding</option>
          <option style={{color : "yellow",fontStyle : "italic",fontWeight : "bold"}}>on Going</option>
          <option  style={{color : "green",fontStyle : "italic",fontWeight : "bold"}}
          >Done</option>
        </select>
          
          </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Order