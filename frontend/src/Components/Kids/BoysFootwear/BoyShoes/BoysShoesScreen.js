
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listBoyShoes} from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import BoyShoes from './BoysShoes'
// import MenTshirtsData from './MenTshirtsData';



export default function BoyShoesScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listBoyShoes());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <BoyShoes key = {product._id} product ={product}></BoyShoes>
  )
  }
 </div>
             )}
        </div>
    )
};
