import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserInfo = () => {
  const [user,setUser] = useState()

 let dates = "2022-03-19T04:36:36.023+00:00"
    

console.log(dates.split("T")[0]);

  useEffect(()=>{
    axios.get("http://localhost:3002/api/user/allUser")
    .then(res => setUser(res.data))

  },[])
  return (
    <div className='col-8'>
       
    <div className=" mb-2">
       
     

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">password</th>
          <th scope="col">Role</th>
          <th scope="col">Join</th>
        </tr>
      </thead>
      <tbody>
     
{
    user?.map((el,ind)=>{
      return (<tr>
      <td>{el.name}</td>
      <td>{el.email}</td>
      <td>{el.password.substring(0,8) + "..."}</td>
      <td>{el.role}</td>
      <td>{el.createdAt.split("T")[0]}</td>
      </tr>)
    })
   }
       
      </tbody>
    </table>
  </div>
    
    </div>
  )
}

export default UserInfo


 