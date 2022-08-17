import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const date = new Date();
const currentYear = date.getFullYear();
function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-lg-start">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!--Grid row--> */}
          <div className="row">
            {/*    <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              {/*   <!--<h5 className="text-uppercase text-light text-bold">QuickBuy</h5>-->  */}
              <img
                src="/Photos/logoForFooter.jpg"
                className="logoForFooter"
                alt=""
              />
              <p className="text">
                An E-commerce fashion shopping website, that provides different
                trust worthy and famous Brands and Products to customers.
                QuickBuy seeks highest-level Customer's satisfaction.{" "}
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-light text-bold">
                Other Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/AboutPage" className="text">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/AboutPage" className="text">
                    Return and Exchange Policy
                  </Link>
                </li>
                <li>
                  <Link to="/AboutPage" className="text">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/AboutPage" className="text">
                    Connect with Us
                  </Link>
                </li>
                <li>
                  <Link to="/AboutPage" className="text">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-light text-bold">Help</h5>
              <p className="text">
                In case of any help, contact us on our email or just connect
                with us on any social media. We will be there to help you. Our
                services are available 24/7.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-light text-bold">
                Connect With Us
              </h5>
              <ul className="list-unstyled icons mb-0 ">
                <li>
                  <a
                    href="mailto: quickbuy.fashion@gmail.com"
                    target="_blank"
                    className="far fa-envelope fa-2x"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/QuickBuy-1167360453302956"
                    className="fab fa-facebook fa-2x"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/quick_.buy/"
                    target="_blank"
                    className="fab fa-instagram fa-2x"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/QuickBuy11"
                    target="_blank"
                    className="fab fa-twitter fa-2x"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          {/*  <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}
        {/*  <!-- Copyright --> */}
        <div className="text-center p-3 text-light">
          Copyright © {currentYear}
          <Link className="text-light" to="#!">
            {" "}
            QuickBuy.com.{" "}
          </Link>
          All Rights reserved
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}
export default Footer;
