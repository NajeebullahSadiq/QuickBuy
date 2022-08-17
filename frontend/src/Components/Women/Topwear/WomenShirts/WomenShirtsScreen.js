
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listWomenShirts } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import WomenShirts from './WomenShirts'
// import MenTshirtsData from './MenTshirtsData';



export default function WomenShirtsScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listWomenShirts());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <WomenShirts key = {product._id} product ={product}></WomenShirts>
  )
  }
 </div>
             )}
        </div>
    )
};
