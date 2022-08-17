import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../../Actions/userAction";
import "./UserNav.css";

export default function UserNav() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <ul className="navbar-nav">
      <div id="navbarNavDropdown2" className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto">
          {/*  code for regis and order page */}
          <li className="nav-item dropdown">
            <div>
              <Link className="nav-link" to="">
                <i className="far fa-user"></i>
              </Link>

              <div
                className="align-items-center justify-content-center"
                id="n2"
              >
                {/* <h5>Welcome</h5>s
                                <h7>To access account and manage Orders</h7> */}
                <div>
                  {userInfo ? (
                    <div>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/profile">
                           Welcome {userInfo.name} <i className="dropdown"></i>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#signout" onClick={signoutHandler}>
                            Sign Out
                          </Link>
                        </li>
                        <li>
                          <Link to="/profile">User Profile</Link>
                        </li>
                        <li>
                          <Link to="/orderHistory">Order History</Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <ul className="dropdown-content">
                      <li>
                        {" "}
                        <Link className="dropdown" to="/signin">
                          Sign In
                        </Link>
                      </li>

                      <li>
                        {" "}
                        <Link className="dropdown" to="/register">
                          Register
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <li className="nav-item">
        <Link className="nav-link" to="/cart">
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
          <i className="fas fa-cart-plus"></i>
        </Link>
      </li>

      {userInfo && userInfo.isAdmin && (
        <div className="dropdown" id = "admin">
          <Link to="#admin" id = "adminText">
            Admin <i className="dropdown"></i>
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/productlist">Products</Link>
            </li>
            <li>
              <Link to="/orderlist">Orders</Link>
            </li>
            <li>
              <Link to="/userlist">Users</Link>
            </li>
          </ul>
        </div>
      )}
    </ul>
  );
}
