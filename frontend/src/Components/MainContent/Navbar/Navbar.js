import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "../../../Actions/userAction";
import SearchBox from "../SearchBox/SearchBox";
import UserNav from "../UserNav/UserNav";
import './Navbar.css';
function Navbar()
{
      const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
   const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "rgb(22, 20, 20)" }}
        >
          <Link className="navbar-brand" to="/">
            <img
              src="/Photos/logo.jpg"
              className="img-responsive"
              alt="Image"
              style={{ width: "60px", height: "60px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNavDropdown" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              {/*  <!-- Starting coding for men Menu--> */}
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button
                    className="btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    style={{
                      backgroundColor: "rgb(22, 20, 20)",
                      color: "white",
                    }}
                  >
                    Men
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="d-md-flex align-items-start justify-content-start">
                      <div>
                        <h6 className="header-for-Men"> Topwear </h6>
                        <Link className="dropdown-item" to="/MenTShirtsScreen">
                          T-Shirts
                        </Link>
                        <Link className="dropdown-item" to="/MenJacketsScreen">
                          Jackets
                        </Link>
                        <h6 className="header-for-Men"> Innerwear </h6>
                        <Link className="dropdown-item" to="/MenVastsScreen">
                          Vests
                        </Link>
                        <Link className="dropdown-item" to="/MenBoxersScreen">
                          Boxers
                        </Link>
                      </div>
                      <div>
                        <h6 className="header-for-Men"> Buttomwear </h6>
                        <Link className="dropdown-item" to="/MenJeansScreen">
                          Jeans
                        </Link>
                        <Link className="dropdown-item" to="/MenTrousersScreen">
                          Trousers
                        </Link>
                        <h6 className="header-for-Men"> Accessories </h6>
                        <Link className="dropdown-item" to="/MenWatchesScreen">
                          Watches
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/MenNecklacesScreen"
                        >
                          Necklaces
                        </Link>
                      </div>
                      <div>
                        <h6 className="header-for-Men"> Footwears </h6>
                        <Link className="dropdown-item" to="MenSneakersScreen">
                          Sneakers
                        </Link>
                        <Link className="dropdown-item" to="/MenSlippersScreen">
                          Slippers
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/*  <!-- Starting coding for Women Menu--> */}
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button
                    className="btn women1"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    style={{
                      backgroundColor: "rgb(22, 20, 20)",
                      color: "white",
                    }}
                  >
                    Women
                  </button>
                  <div
                    className="dropdown-menu women"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="d-md-flex align-items-start justify-content-start">
                      <div>
                        <h6 className="header-for-women"> Topwear </h6>
                        <Link className="dropdown-item" to="/WomenShirtsScreen">
                          Shirts
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/WomenJacketsScreen"
                        >
                          Jackets
                        </Link>
                        <h6 className="header-for-women"> LingeriesWear </h6>
                        <Link className="dropdown-item" to="/WomenBraScreen">
                          Bras
                        </Link>
                        <Link className="dropdown-item" to="/WomenPantyScreen">
                          Panties
                        </Link>
                      </div>
                      <div>
                        <h6 className="header-for-women"> Bottomwear </h6>
                        <Link className="dropdown-item" to="/WomenJeansScreen">
                          Jeans
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/WomenTrackPantScreen"
                        >
                          Track Pants
                        </Link>
                        <h6 className="header-for-women"> Jewellery </h6>
                        <Link
                          className="dropdown-item"
                          to="/WomenWatchesScreen"
                        >
                          Watches
                        </Link>
                        <Link className="dropdown-item" to="/WomenRingsScreen">
                          Rings
                        </Link>
                      </div>
                      <div>
                        <h6 className="header-for-women"> Footwear </h6>
                        <Link className="dropdown-item" to="/WomenShoesScreen">
                          Shoes
                        </Link>
                        <Link className="dropdown-item" to="/WomenHeelsScreen">
                          Heels
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Starting coding for Kids Menu--> */}
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button
                    className="btn kids"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    style={{
                      backgroundColor: "rgb(22, 20, 20)",
                      color: "white",
                    }}
                  >
                    Kids
                  </button>
                  <div
                    className="dropdown-menu kids"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="d-md-flex align-items-start justify-content-start">
                      <div>
                        <h6 className="header-for-kids"> Boys Clothing </h6>
                        <Link className="dropdown-item" to="/BoyTShirtsScreen">
                          Shirts
                        </Link>
                        <Link className="dropdown-item" to="/BoyJeansScreen">
                          Jeans
                        </Link>
                        <h6 className="header-for-kids"> Boys Footwear </h6>
                        <Link className="dropdown-item" to="/BoysShoesScreen">
                          Shoes
                        </Link>
                        <Link className="dropdown-item" to="/BoysSandalsScreen">
                          Sandals
                        </Link>
                      </div>
                      <div>
                        <h6 className="header-for-kids">Girls Clothing </h6>
                        <Link className="dropdown-item" to="/GirlsJeansScreen">
                          Jeans
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/GirlsTshirtsScreen"
                        >
                          Shirts
                        </Link>
                        <h6 className="header-for-kids"> Girls Footwear </h6>
                        <Link className="dropdown-item" to="/GirlsShoesScreen">
                          Shoes
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/GirlsSandalsScreen"
                        >
                          Sandals
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutPage">
                  About
                </Link>
              </li>
            </ul>
            <div>
              <BrowserRouter>
                <Route
                  render={({ history }) => (
                    <SearchBox history={history}></SearchBox>
                  )}
                ></Route>
              </BrowserRouter>
            </div>
            <UserNav />
          </div>
        </nav>
      </div>
    );
}
export default Navbar;