import React, { useState } from 'react'
import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';
import {useHistory} from "react-router-dom"
import "./SignInUp.css";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Login } from '../../API/AllApi';
import {authenticate} from "../../utils/auth"
import { loadingStatus, successMsg, ErrorMsg } from "../../utils/message";
import Footer from '../Footer/Footer'
const Signin = () => {
  const [massageShow, setMassageShow] = useState({
    disabled: false,
    loading: false,
    success: false,
    error : false,
  })

const history =   useHistory()
const {
  register,
  formState: { errors },
  handleSubmit,
  reset,
  watch,
} = useForm();

const password = useRef({});
password.current = watch("password", "");

  const onSubmit = (e) => {
     setMassageShow({
       disabled: true,
       loading: true,
       success: false,
       error: false,
     });

     console.log(e)

  Login(e)
    .then(res => {
      authenticate(res.data.Token, () => {
        setMassageShow({
          disabled: true,
          loading: false,
          success: true,
          error: false,
        });
        successMsg(true, res.data.message)
        history.replace("/")
      });
    })
    .catch(err => {
      
       setMassageShow({
         disabled: false,
         loading: false,
         success: false,
         error: true,
       });
      ErrorMsg(true,"User Information Invalid")
   })
  reset();
};

    return (
      <div className='signin-page'>
      <Layout title="Signin Page">
     
        <Navbar></Navbar>
        
        <div className="container" style={{paddingTop : "150px"}}>
          <div className="row signupPage">
            <div className="col-lg-6  col-md-8  col-12 animate__bounceInDown offset-3 signinWrapper">
              <div className=" signup_Wrapper p-3 my-5">
                <p className="signupText mb-2 cssanimation lePeek sequence">
                  Signin
                </p>
                <Link to="/signup" className="text-center">
                  Create An Account?
                </Link>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ textTransform: "capitalize" }}
                >
                  {loadingStatus(massageShow.loading)}
                  <div className="input_field_div">
                    <input
                      type="email"
                      className="form-control input_field my-3"
                      autoSave='off'
                      autoComplete='off'
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
                    <small style={{ color: "red" }}>
                      {errors.email.message}
                    </small>
                  )}

                  <div className="input_field_div">
                    <input
                      type="password"
                      className="form-control input_field my-3"
                      {...register("password", {
                        required: "Password is Require",
                        minLength: {
                          value: 8,
                          message: "Password must have at least 8 characters",
                        },
                      })}
                      autoSave='off'
                      autoComplete='off'
                      placeholder="Enter Your password"
                    ></input>
                  </div>
                  {errors.password && (
                    <small style={{ color: "red" }}>
                      {errors.password.message}
                    </small>
                  )}

                  <br></br>
                  <div className="text-center">
                    <button
                      className="custom-btn  text-center"
                      disabled={massageShow.disabled}
                      
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
           
          </div>
        </div>
        
        <Footer></Footer>
        
      </Layout>
      </div>
    );
}

export default Signin
