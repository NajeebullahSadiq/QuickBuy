
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listGirlsJeans} from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import GirlsJeans from './GirlsJeans'
// import MenTshirtsData from './MenTshirtsData';



export default function GirlsJeansScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listGirlsJeans());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <GirlsJeans key = {product._id} product ={product}></GirlsJeans>
  )
  }
 </div>
             )}
        </div>
    )
};
