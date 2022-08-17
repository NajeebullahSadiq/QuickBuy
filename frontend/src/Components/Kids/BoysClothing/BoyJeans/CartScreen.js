import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../../../Actions/CartActions';
import MessageBox from '../../../MessageBox';
import '../../../../CartScreenCss/CartScreen.css'

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) =>{
    dispatch(removeFromCart(id));
  }
   const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div className=" C">
    <div className="whole" >
      <h1 className = 'CartH1'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <MessageBox>Cart is Empty. <Link to="/">Go To Shopping</Link></MessageBox>
      ): (
        <ul>
          {cartItems.map((item)=>(
            <li key={item.product}>
              <div className="CartRow">
                <div >
                  <img src = {item.image} alt={item.name} className = "small"></img>
                </div>
                <div className="min-30" id = "des">
                  <Link to={`/bJeans/${item.product}`}>{item.name}</Link>
                </div>
                <div>
                   <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                </div>
                <div id = "price">
                  ₹{item.price}
                </div>
                <div> <button  className = "remove"   type="button" onClick = {()=> removeFromCartHandler(item.product)}>
                Remove</button></div>
              </div>
            </li>
          ))}
        </ul>
      )}
        </div>
      <div className="col-2">
        <div className="cart">
          <ul>
            <li>
              <h2 className = "cartH2">
                Total Rupees ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ₹
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="cartBt"
                disabled={cartItems.length === 0}
              >
              <Link to="/ProceedToBuy"> Proceed to Checkout</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}