import React from 'react'
import { NavLink,Link } from "react-router-dom"
import "./Navbar.css"
import { signout, isAuthenticate, userInfo } from "../../utils/auth";
import {  useSelector } from "react-redux";

const Navbar = () => {
  const ItemList = useSelector((state) => state);
    return (
      <>
        <div className="NavbarWrapper">
          <div className="px-lg-4 px-md-2 px-sm-0  tex-center">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light navWrap"> 
            

               <Link className="navbar-brand d-flex" exact to="/">
               
                <span className="logoTitle">
                  <div>
                    <p>Wholesale Bazar</p>
                    
                  </div>
                </span>
              </Link> 

              

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> 
            
             <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      exact
                      to="/"
                    >
                      <i className="fa fa-home" aria-hidden="true"></i>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      to="/about"
                    >
                      <i className="fa fa-book" aria-hidden="true"></i>
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      to="/shop"
                    >
                      <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                      Shop
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      to="/gallery"
                    >
                      <i className="fa fa-picture-o" aria-hidden="true"></i>
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item CartLink">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      to="/cart"
                    >
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      Cart
                      <span className="cartCount">{ItemList.item.length && ItemList.item.length || "0" }</span>7
                    </NavLink>
                  </li>

                  {!isAuthenticate() && (
                    <>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active_css"
                          className="nav_Link"
                          to="/signin"
                        >
                          <i className="fa fa-sign-in" aria-hidden="true"></i>
                          signin
                        </NavLink>
                      </li>
                    </>
                  )}

                  {isAuthenticate() && (
                    <>
                      
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active_css"
                          className="nav_Link"
                          to={`/${userInfo().role}/deshbord`}
                     
                        >
                          <i className="fa fa-user" aria-hidden="true"></i>
                          Deshbord
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active_css"
                          className="nav_Link"
                          to="/logout"
                        >
                          <i className="fa fa-sign-in" aria-hidden="true"></i>
                          Logout
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>





      </>
    );
}

export default Navbar
