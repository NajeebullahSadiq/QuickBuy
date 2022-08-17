import React, { useEffect, useState } from 'react';
import './ProductScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { detailsListOFFullProduct} from '../../Actions/ProductActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import Rating from '../Rating/Rating';
export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsListOFFullProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="r top">
            <div className="c1">
              <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="c1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li className="Rs">Rs. {product.price}</li>
                <li className="description">
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="c1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="r">
                      <div className="pr">Price</div>
                      <div className="price">Rs. {product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="r">
                      <div className="status">Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success"> In Stock </span>
                        ) : (
                          <span className="error">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div class="qty">Qty</div>
                          <div className="qtyAmount">
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                        <button
                          onClick={addToCartHandler}
                          id="bt"
                          className=" block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
