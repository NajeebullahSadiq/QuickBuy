
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listGirlsJeans, listGirlsTShirts} from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import GirlsTshirts from './GirlsTshirts'
// import MenTshirtsData from './MenTshirtsData';



export default function GirlsTshirtsScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listGirlsTShirts());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <GirlsTshirts key = {product._id} product ={product}></GirlsTshirts>
  )
  }
 </div>
             )}
        </div>
    )
};
