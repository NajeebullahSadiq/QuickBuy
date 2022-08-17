import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
function Body() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link>
              {" "}
              <img
                className="d-block w-100 height"
                src="brands/8.png"
                alt="First slide"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link>
              <img
                className="d-block w-100 height"
                src="brands/2.jpeg"
                alt="Second slide"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link>
              {" "}
              <img
                className="d-block w-100 height"
                src="brands/reebook.png"
                alt="Third slide"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link>
              <img
                className="d-block w-100 height"
                src="brands/7.jpg"
                alt="Forth slide"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link>
              <img
                className="d-block w-100 height"
                src="brands/6.png"
                alt="6 slide"
              />
            </Link>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/*  <!-- </div> --> */}
      {/*  <!-- Catagory --> */}
      <div className="Catagory">
        <div className="cardC" style={{ width: "16rem" }}>
          <Link to="/MenJacketsScreen">
            <img src="/Photos/man.jpg" className="rounded-circle" alt="Men" />
          </Link>
          <h4>Men's Jackets</h4>
        </div>
        <div className="cardC" style={{ width: "16rem" }}>
          <Link to="/WomenJacketsScreen">
            <img
              src="/Photos/woman.png"
              className="rounded-circle"
              alt="Women"
            />
          </Link>
          <h4>Women's Jackets</h4>
        </div>
        <div className="cardC" style={{ width: "16rem" }}>
          <Link to="/BoyTShirtsScreen">
            <img src="/Photos/kid.jpg" className="rounded-circle" alt="Kids" />
          </Link>
          <h4> Kids' Shirts</h4>
        </div>
        <div className="cardC" style={{ width: "16rem" }}>
          <Link to="/MenTShirtsScreen">
            <img
              src="/Photos/TShirt.png"
              className="rounded-circle"
              alt="Men's T-shirt"
            />
          </Link>
          <h4>Men's T-Shirts</h4>
        </div>
        <div className="cardC" style={{ width: "16rem" }}>
          <Link to="/WomenShirtsScreen">
            <img
              src="/Photos/womenShirt.jpg"
              className="rounded-circle"
              alt="Women's T-Shirt"
            />
          </Link>
          <h4>Women's Shirts</h4>
        </div>
      </div>
      <div className="main-div">
        <div className="row">
          <div className="row">
            <div className="col-1">
              <Link to="/MenTShirtsScreen">
                <img className="img-small" src="carts/1.jpg"></img>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <Link to="/WomenRingsScreen">
                <img className="img-small" src="carts/2.jpg"></img>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <Link to="/MenJeansScreen">
                <img className="img-small" src="carts/3.jpg"></img>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <Link to="/WomenHeelsScreen">
                <img className="img-small" src="carts/4.jpg"></img>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <Link to="/WomenJacketsScreen">
                <img className="img-small" src="carts/12.jpg"></img>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <Link to="/GirlsTshirtsScreen">
                <img className="img-small" src="carts/6.jpg"></img>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <Link to="/MenSneakersScreen">
                <img className="img-small" src="carts/7.jpg"></img>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <Link to="/MenSneakersScreen">
                <img className="img-small" src="carts/8.jpg"></img>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <Link to="/MenSneakersScreen">
                <img className="img-small" src="carts/5.jpg"></img>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <Link to="/Products">
                <img className="img-small" src="carts/13.jpg"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
