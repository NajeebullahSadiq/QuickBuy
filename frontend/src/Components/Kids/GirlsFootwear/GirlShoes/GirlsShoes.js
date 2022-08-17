import React from 'react'
import Rating from '../../../Rating/Rating.js';
import '../../../Product/Product.css';
import { Link } from 'react-router-dom';
export default function GirlsShoes(props) {
    const {product} = props;
    return (
       <div key= {product._id} className="pCard">
  <Link to={`/gShoes/${product._id}`}>
    <img className ="medium" src={product.image} alt={product.name}/>
    </Link>
    <div className= "pCard-body">
      <Link to={`/gShoes/${product._id}`}><h2> {product.name}</h2></Link>
      <Rating rating={product.rating} numReviews = {product.numReviews}></Rating>
      <div className="price">
      Rs. {product.price}
      </div>
    </div>
  </div>
    )
}