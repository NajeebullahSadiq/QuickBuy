
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listGirlsJeans, listGirlsTShoes} from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import GirlsShoes from './GirlsShoes'
// import MenTshirtsData from './MenTshirtsData';



export default function GirlsShoesScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listGirlsTShoes());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <GirlsShoes key = {product._id} product ={product}></GirlsShoes>
  )
  }
 </div>
             )}
        </div>
    )
};
