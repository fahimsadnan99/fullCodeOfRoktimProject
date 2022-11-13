import axios from "axios";
import { API } from "../utils/config";

export const Registration = (user) => {
  return axios.post(`${API}/user/signUp`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const Login = (user) => {
  console.log( {...user});
  return axios.post(`${API}/user/signIn`, {...user}, {
    
    headers: {
      "Content-Type": "application/json",
    },
  });
};



export const CatagoryPost = ({ catagory }) => {
  return axios.post(
    `${API}/catagory`,
    { catagory },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("jwt")),
      },
    }
  );
};

export const GetCatagory = () => {
  return axios.get(`${API}/catagory`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("jwt")),
    },
  });
};

export const PostProduct = (form) => {
  return axios.post(`${API}/product`, form, {
    headers: {
      "Content-Type": "application/json",
      Authorization: JSON.parse(localStorage.getItem("jwt")),
    },
  });
};

export const getProduct = (sortBy, order, limit) => {
  return axios.get(
    `${API}/product?sortBy=${sortBy}&order=${order}&limit=${limit}`
  );
};

export const getProductDetails = (id) => {
  return axios.get(`${API}/product/${id}`);
};

export const getFilterProducts = (sortBy, skip, order, limit, filters = {}) => {
  const data = {
    order: order,
    limit: limit,
    skip: skip,
    sortBy: sortBy,
    filters: { ...filters },
  };

  return axios.post(`${API}/product/filter`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};



export const GetProfileData = () => {
  return axios.get(`${API}/profile`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("jwt")),
    },
  });
};


export const updateProfile = (form) => {
  return axios.post(`${API}/profile`, form, {
    headers: {
      "Content-Type": "application/json",
      Authorization: JSON.parse(localStorage.getItem("jwt")),
    },
  });
};

export const deleteProduct =  (id) => {
  return axios.delete(`${API}/product/${id}`)
};


