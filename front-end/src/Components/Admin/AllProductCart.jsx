import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import { getProduct,deleteProduct } from "../../API/AllApi";


const AllProductCart = () => {
  const [product, setProduct] = useState();
  const [change,setChange] = useState(false);
   
  const handleDelete = (id) => {
      
    console.log(id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
             deleteProduct(id)
               .then(res => {
                 Swal.fire(res.data.message)
                 setChange(!change);
               });
               
          }
        });
    }
  
    useEffect(() => {
      getProduct()
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    }, [change]);
   useEffect(() => {
     getProduct()
       .then((res) => setProduct(res.data))
       .catch((err) => console.log(err));
   }, []);
    
    return (

      
      <div className=" mb-2">
       
     

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              product && product.map(item => {
                return (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={item.photo}
                        alt={item.name}
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>{ item.name}</td>
                    <td>
                      <button className="btn btn-danger" onClick={()=> handleDelete(item._id)}>
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            }
           
           
          </tbody>
        </table>
      </div>
    );
}

export default AllProductCart
