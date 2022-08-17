
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listWomenHeels } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import WomenHeels from './WomenHeels'
// import MenTshirtsData from './MenTshirtsData';



export default function WomenHeelsScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listWomenHeels());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <WomenHeels key = {product._id} product ={product}></WomenHeels>
  )
  }
 </div>
             )}
        </div>
    )
};
