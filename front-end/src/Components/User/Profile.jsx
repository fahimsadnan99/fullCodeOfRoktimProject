import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { updateProfile } from "../../API/AllApi"
import {successMsg} from "../../utils/message"

const Profile = () => {

    
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm()

  const onSubmit = (e) => {
      console.log(e);
      updateProfile(e)
          .then(res => successMsg(true,res.data))
      .catch(err => console.log(err))
    reset();
  };
  return (
    <div
      class="modal fade"
      id="Profile"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Update Your Profile
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
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ textTransform: "capitalize" }}
              >
                <div className="input_field_div">
                  <input
                    type="name"
                    className="form-control input_field my-2"
                    {...register("name")}
                    placeholder="Enter Your Name"
                  ></input>
                </div>
                <div className="input_field_div">
                  <input
                    type="city"
                    className="form-control input_field my-2"
                    {...register("city")}
                    placeholder="Enter Your City"
                  ></input>
                </div>

                <div className=" input_field_div">
                  <input
                    type="phone"
                    className="form-control input_field my-2"
                    {...register("phone")}
                    placeholder="Enter Your phone"
                  ></input>
                </div>

                <div className="input_field_div">
                  <input
                    type="address"
                    className="form-control input_field my-2"
                    {...register("address")}
                    placeholder="Enter Your address"
                  ></input>
                </div>

                <div className="input_field_div">
                  <input
                    type="number"
                    className="form-control input_field my-2"
                    {...register("postCode")}
                    placeholder="Enter Your postCode"
                  ></input>
                </div>

                <br></br>
                <div className="text-center">
                  <button className="btn btn-outline-danger text-center">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
