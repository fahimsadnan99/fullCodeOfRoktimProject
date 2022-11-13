import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { GetCatagory } from "../../API/AllApi";
import { PostProduct } from "../../API/AllApi";
import { successMsg, ErrorMsg, loadingStatus } from "../../utils/message";

const Brand = ["apon","pran","bosundhora"]

const ProductCreate = () => {
  const [catagory, setCatagory] = useState("");
  const [selectCatagry, setSelectCatagry] = useState("0");
  const [selectBrand, setSelectBrand]= useState();
  const [file, setFile] = useState();
  const [value, setValue] = useState({
    loading: false,
    success: false,
    error: false,
  });
  const { loading, success, error, disabled } = value;

  

  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();

  const handleChange = (e) => {
    setSelectCatagry(e.target.value)
  }

  const handleChangeBrand =(e)=>{
    setSelectBrand(e.target.value)
  }
 
  const onSubmit = (e) => {
    setValue({ ...value, loading: true });
    if (selectCatagry === "0") {
      ErrorMsg(true, "Select Catagory");
    } else if (file === undefined) {
      ErrorMsg(true, "Select Image");
    } else {
      const formData = new FormData();

      formData.append("count", 1);
      formData.append("file", file);
      formData.append("name", e.name);
      formData.append("price", Number(e.price));
      formData.append("quantity", Number(e.quantity));
      formData.append("description", e.description);
      formData.append("catagory", selectCatagry);
      formData.append("brand", selectBrand);
      formData.append("manufecture", e.manufecture);
      formData.append("weight", e.weight);
      formData.append("expireDate", e.expireDate);

     

      PostProduct(formData)
        .then((res) => {
          successMsg(true, "Product Added Successful");
          setFile(undefined);
          setSelectCatagry("0")
          setValue({
            ...value,
            success: true,
          });
          window.location.reload(true);
        })
        .catch((err) => {
          setValue({
            ...value,
            loading: false,
          });
          ErrorMsg(true, "Product Uploade Faild");
        });
      reset();
    }
  };

  useEffect(() => {
    GetCatagory()
      .then((response) => setCatagory(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{color : "black"}}>
      <div className="row">
        <div className="col-10 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
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
                    Create Product
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
                  <div className="d-flex">
                    <h6>Catagory-</h6>

                    <select class="form-control form-control-sm" onChange={handleChange}>
                      <option value="0">Select Catagory</option>
                      {catagory &&
                        catagory.map((item) => (
                          <option value={item._id}>
                            {item.catagory}
                          </option>
                        ))}
                    </select>
                  </div>


                  <div className="d-flex my-2">
                  <h6 className="pr-3">Brand-</h6>

                  <select class="form-control form-control-sm" onChange={handleChangeBrand}>
                    <option value="0">Select Brand</option>
                    {Brand &&
                      Brand.map((item) => (
                        <option value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                </div>


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
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ textTransform: "capitalize" }}
                  >
                    <div className="input_field_div">
                      <input
                        type="name"
                        className="form-control input_field my-2"
                        {...register("name", {
                          required: "Name is Require",
                          minLength: {
                            value: 4,
                            message: "Name mustbe 4 carecter",
                          },
                        })}
                        style={{color : "black", border : "1px solid black"}}
                        placeholder="Product Name"
                      ></input>
                    </div>
                    {errors.name && (
                      <small style={{ color: "red" }}>
                        {errors.name.message}
                      </small>
                    )}

                    <div className="input_field_div">
                      <input
                        type="number"
                        className="form-control input_field my-2"
                        {...register("price", {
                          required: "Price is Require",
                          minLength: {
                            value: 2,
                            message: "Price mustbe 4 carecter",
                          },
                        })}
                        style={{color : "black", border : "1px solid black"}}
                        placeholder="Enter Product Price"
                      ></input>
                    </div>
                    {errors.price && (
                      <small style={{ color: "red" }}>
                        {errors.price.message}
                      </small>
                    )}

                    <div className="input_field_div">
                      <input
                        type="number"
                        className="form-control input_field my-2"
                        {...register("quantity", {
                          required: "quantity is Require",
                          minLength: {
                            value: 2,
                            message: "quantity mustbe 2 carecter",
                          },
                        })}
                        style={{color : "black", border : "1px solid black"}}
                        placeholder="Enter Product quantity"
                      ></input>
                    </div>
                    {errors.quantity && (
                      <small style={{ color: "red" }}>
                        {errors.quantity.message}
                      </small>
                    )}



                    <div className="input_field_div">
                      <input
                        type="text"
                        id="datepicker"
                        className="form-control input_field my-2"
                        {...register("manufecture", {
                          required: "Date is required"
                        })}
                        placeholder="Manufectureing Date"
                        autocomplete="off"
                        style={{color : "black", border : "1px solid black"}}
                      ></input>
                    </div>
                    {errors.manufecture && (
                      <small style={{ color: "red" }}>
                        {errors.manufecture.message}
                      </small>
                    )}

                    <div className="input_field_div">
                      <input
                        type="text"
                        id="datepicker1"
                        className="form-control input_field my-2"
                        {...register("expireDate", {
                          required: "Date is required"
                        })}
                        placeholder="Expire Date"
                        autocomplete="off"
                        style={{color : "black", border : "1px solid black"}}
                      ></input>
                    </div>
                    {errors.expireDate && (
                      <small style={{ color: "red" }}>
                        {errors.expireDate.message}
                      </small>
                    )}


                    <div className="input_field_div">
                    <input
                      type="number"
                      id="datepicker1"
                      className="form-control input_field my-2"
                      {...register("weight", {
                        required: "weight is required"
                      })}
                      placeholder="Weight"
                      autocomplete="off"
                      style={{color : "black", border : "1px solid black"}}
                    ></input>
                  </div>
                  {errors.weight && (
                    <small style={{ color: "red" }}>
                      {errors.weight.message}
                    </small>
                  )}

                    <div className="input_field_div">
                      <textarea
                        type="text"
                        className="form-control input_field my-2"
                        {...register("description", {
                          required: "description is Require",
                          minLength: {
                            value: 5,
                            message: "description mustbe 5 carecter",
                          },
                        })}
                        style={{color : "black", border : "1px solid black"}}
                        placeholder="Enter Product description"
                      ></textarea>
                    </div>
                    {errors.description && (
                      <small style={{ color: "red" }}>
                        {errors.description.message}
                      </small>
                    )}

                    <br></br>
                    <div className="text-center">
                      <button className="btn btn-outline-danger text-center">
                        Uploade Product
                      </button>
                    </div>
                  </form>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
