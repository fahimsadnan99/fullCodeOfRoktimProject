import React from 'react'
import {Switch, Route} from "react-router-dom"
import About from './Components/About/About'
import Address from './Components/Address/Address'
import Cart from './Components/Cart/Cart'

import Gallery from './Components/Gallery/Gallery'
import Home from './Components/Home/Home'
import Logout from './Components/Logout/Logout'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Shop from './Components/Shop/Shop'
import Signin from './Components/User/Signin'
import Signup from './Components/User/signup'
import UserDeshbord from "./Components/User/Dashbord"
import AdminRouter from "./Components/PrivateRoute/AdminRoute"
import AdminDashbord from './Components/Admin/Dashbord'
import SingleProduct from "./Components/SinglePage"
import Payment from "./Components/PaymentCard/Payment"
import Card from "./Components/Payment/Card"
import Bkash from "./Components/Payment/Bkash"
import Nogod from "./Components/Payment/Nogod"
import Brand from "./Components/Shop/SingleShop"



const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/gallery">
          <Gallery></Gallery>
        </Route>
        <Route exact path="/signin">
          <Signin></Signin>
        </Route>
        <Route exact path="/signup">
          <Signup></Signup>
        </Route>
        <Route exact path="/productDetails/:id">
          <SingleProduct></SingleProduct>
          </Route>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/brandShop">
        <Brand></Brand>
      </Route>


<Route exact path="/payment">
          <Payment></Payment>
        </Route>
         

        <Route exact path="/logout">
          <Logout></Logout>
        </Route>

        <PrivateRoute exact path="/address">
          <Address></Address>
        </PrivateRoute>
        <PrivateRoute exact path="/user/deshbord">
          <UserDeshbord></UserDeshbord>
        </PrivateRoute>

        <PrivateRoute exact path="/user/checkout">
          <Address></Address>
        </PrivateRoute>

        <AdminRouter exact path="/admin/deshbord">
          <AdminDashbord></AdminDashbord>
        </AdminRouter>

        <PrivateRoute exact path="/payment">
          <Payment></Payment>
        </PrivateRoute>
        <PrivateRoute exact path="/card">
        <Card></Card>
      </PrivateRoute>
      <PrivateRoute exact path="/bkash">
      <Bkash></Bkash>
    </PrivateRoute>

    <PrivateRoute exact path="/nogod">
 <Nogod></Nogod>
  </PrivateRoute>
      </Switch>
      
    </>
  );
}

export default App
