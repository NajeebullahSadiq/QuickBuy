
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listWomenShirts, listWomenShoes } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import WomenShoes from './WomenShoes'
// import MenTshirtsData from './MenTshirtsData';



export default function WomenShoesScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listWomenShoes());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <WomenShoes key = {product._id} product ={product}></WomenShoes>
  )
  }
 </div>
             )}
        </div>
    )
};
