
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listWomenJackets, listWomenShirts } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import WomenJackets from './WomenJackets'
// import MenTshirtsData from './MenTshirtsData';



export default function WomenJacketsScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listWomenJackets());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <WomenJackets key = {product._id} product ={product}></WomenJackets>
  )
  }
 </div>
             )}
        </div>
    )
};
