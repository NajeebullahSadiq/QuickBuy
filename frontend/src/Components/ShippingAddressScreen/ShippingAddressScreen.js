import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../Actions/CartActions';
import CheckoutSteps from '../checkoutSeteps/CheckoutSteps';
import './ShippingAdressScreen.css'


export default function ShippingAddressScreen(props) {
    const userSignin = useSelector((state )=>state.userSignin);
    const {userInfo} = userSignin;
    const cart = useSelector((state)=>state.cart);
    const {shippingAddress} = cart;
    if(!userInfo){
        props.history.push('/signin');
    }
    const [fullName, setfullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();

    const submitHandler= (e) =>{
        e.preventDefault();
        //TODO: dispath save shipping Address Action
        dispatch(saveShippingAddress({fullName,address,city,postalCode,country}));
        props.history.push('payment');
    }
    return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="Shipping_Main">
      <div>
      <img src="/Photos/logoForFooter.jpg" className="Shipping_Image"/>
    </div>
      <form className="form" onSubmit={submitHandler}>
        <div className=" Shipping_txt">
          <h1 className="Shipping_txt">Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
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
