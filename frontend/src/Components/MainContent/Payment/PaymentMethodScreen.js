import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../../Actions/CartActions';
import CheckoutSteps from '../../checkoutSeteps/CheckoutSteps'
import './PaymentMethodScreen.css'

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="Payment_Main">
      <div>
      <img src="/Photos/logoForFooter.jpg" className="Payment_Image"/>
    </div>
      <form className="form" onSubmit={submitHandler}>
        <div className="Payment_txt">
          <h1 >Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal"> PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe"> Cash on Delivery</label>
          </div>
        </div>
        <div>
          <label />
          <button className="bts" type="submit">
            Continue
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
