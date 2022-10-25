import React from 'react'
import "./Address.css"
import { useSelector, useDispatch } from 'react-redux';
import Layout from "../Layout/Layout"
import Navbar from '../Navbar/Navbar';
import { useForm } from "react-hook-form";
import { successMsg } from "../../utils/message";
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer'





const Address = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues: { email: `${user.email}`, phone: `${user.phone}`, city: `${user.city}`, address: `${user.address}`, postCode: `${user.postCode}` },
  });


  const ItemList = useSelector((state) => state);



  const onSubmit = (e) => {
    dispatch({ type: "CHECKOUT_USER_DATA", value:  e });
    console.log(e);
    // successMsg(true, "Product Perchanges Successful")
    // dispatch({ type: "REMOVE_ALL_ITEM" });
    history.push("/payment")
   
    reset();
  };

  const price = () => {
    let sum = 0;
    if (ItemList.transportFee === 0) {
      sum = 0
    } else {
      ItemList.item.map((el) => {
        const newPrice = el.price * el.count;
        sum += newPrice;
      });
    }
    return sum
  };



  return (
    <Layout title="address">
      <Navbar></Navbar>
      <button className='btn btn-success mt-3 mx-2' onClick={()=> history.goBack()}>Go Back</button>
      <div className="container text-center">
        <div className="row">
          <div className="my-5 col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 formStyle">
            <h3>Total Ammount = {price() + ItemList.transportFee} TK</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input_field_div">
                <input
                  type="email"
                  className="form-control input_field my-3"
                  {...register("email", {
                    required: "Email is Require",
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid Email Address",
                    },
                  })}
                  placeholder="Enter Your Eamil"
                ></input>
              </div>
              {errors.email && (
                <small style={{ color: "red" }}>{errors.email.message}</small>
              )}

              <div className=" input_field_div">
                <input
                  type="phone"
                  className="form-control input_field my-2"
                  {...register("phone", {
                    required: "Phone is Require",

                    min: {
                      value: 10,
                      message: "Minimum value is 10",
                    },
                    pattern: {
                      value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                      message: "Phone Number is invalid",
                    },
                  })}
                  placeholder="Enter Your phone"
                ></input>
              </div>
              {errors.phone && (
                <small style={{ color: "red" }}>{errors.phone.message}</small>
              )}

              <div className="input_field_div">
                <input
                  type="city"
                  className="form-control input_field my-2"
                  {...register("city", {
                    required: "City is Require",
                    minLength: {
                      value: 3,
                      message: "City mustbe 4 carecter",
                    },
                  })}
                  placeholder="Enter Your City"
                ></input>
              </div>
              {errors.name && (
                <small style={{ color: "red" }}>{errors.city.message}</small>
              )}

              <div className="input_field_div">
                <input
                  type="address"
                  className="form-control input_field my-2"
                  {...register("address", {
                    required: "address is Require",
                    minLength: {
                      value: 4,
                      message: "Name mustbe 4 carecter",
                    },
                  })}
                  placeholder="Enter Your address"
                ></input>
              </div>
              {errors.name && (
                <small style={{ color: "red" }}>
                  {errors.address.message}
                </small>
              )}

              <div className="input_field_div">
                <input
                  type="number"
                  className="form-control input_field my-2"
                  {...register("postCode", {
                    required: "postCode is Require",
                    minLength: {
                      value: 4,
                      message: "postCode mustbe 4 Number",
                    },
                  })}
                  placeholder="Enter Your postCode"
                ></input>
              </div>
              {errors.name && (
                <small style={{ color: "red" }}>
                  {errors.postCode.message}
                </small>
              )}
              <br></br>
              <div className="text-center">
                <button className="custom-btn btn-9 text-center" style={{ width: "200px", fontWeight: "bold" }}>
                  Purchage Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Layout>
  );
}

export default Address
