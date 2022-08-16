import React, { useEffect, useRef, useState } from "react";
import { successMsg ,ErrorMsg, loadingStatus} from "../../utils/message";
import { GetCatagory } from "../../API/AllApi";
import { PostProduct } from "../../API/AllApi";

const CreateProduct = () => {
  const [catagory, setCatagory] = useState();
  const [value, setValue] = useState({
    loading: false,
    success: false,
    error: false,
   
  });
  const { loading, success, error, disabled } = value;
  const [file, setFile] = useState();

  let name = useRef("");
  let price = useRef("");
  let quantity = useRef("");
  let description = useRef("");
  let catagorys = useRef("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (
      name.current.value !== undefined   ||
      price.current.value !== undefined ||
      quantity.current.value  !== undefined ||
      description.current.value !== undefined ||
      catagory.current.value !== undefined
    ) {
      

      const formData = new FormData();

      formData.append("file", file);
      formData.append("name", name.current.value);
      formData.append("price", price.current.value);
      formData.append("quantity", quantity.current.value);
      formData.append("description", description.current.value);
      formData.append("catagory", catagorys.current.value);
      formData.append("count", 1)

      PostProduct(formData)
        .then((res) => {
          successMsg(true, "Product Added Successful");

          name.current.value = "";
          price.current.value = "";
          quantity.current.value = "";
          description.current.value = "";
          catagory.current.value = "";
          setFile("");

          setValue({
            ...value,
            success: true,
          });
        })
        .catch((err) => {
          let errorMsg = "Something Went Wrong";
          if (err.response) {
            errorMsg = err.response.data;
          } else {
            errorMsg = "Something Went Wrong";
          }
          setValue({
            ...value,
            error: errorMsg,
            loading: false,
            disabled: false,
          });
        });
    } else {
      window.alert("Fill All Field")
    }
  };

  

  console.log(file);
  useEffect(() => {
    GetCatagory()
      .then((response) => setCatagory(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <div
            class="modal fade"
            id="ProductCreate"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Create Products
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  {loadingStatus(loading)}
                  {ErrorMsg(error, error)}
                  <div className="d-flex">
                    <h6>Catagory-</h6>

                    <select class="form-control form-control-sm">
                      <option>Select Catagory</option>
                      {catagory &&
                        catagory.map((item) => (
                          <option value={item._id} ref={catagorys}>
                            {item.catagory}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <form className="mt-3" onSubmit={hanldeSubmit}>
                      <div className="d-flex">
                        <h6>Select Product Image-</h6>
                        <div className="form-group">
                          <input
                            type="file"
                            name="file"
                            className="form-control-file"
                            onChange={(e) => setFile(e.target.files[0])}
                          />
                          <img
                            src={file && URL.createObjectURL(file)}
                            alt="img"
                            style={{ width: "100px" }}
                          ></img>
                        </div>
                      </div>

                      <input
                        type="text"
                        name="name"
                        ref={name}
                        className="form-control my-2"
                        placeholder="Enter Product Name"
                      />
                      <input
                        type="Number"
                        name="price"
                        ref={price}
                        className="form-control my-2"
                        placeholder="Enter Price"
                      />
                      <input
                        type="Number"
                        name="quantity"
                        ref={quantity}
                        className="form-control my-2"
                        placeholder="Quantity"
                      />

                      <p>Manufecture : <input type="text" id="datepicker"></input></p>
                      
                      <textarea
                        type="text"
                        name="description"
                        ref={description}
                        className="form-control my-2"
                        placeholder="Description"
                      />
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-success"
                        disabled={disabled}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
