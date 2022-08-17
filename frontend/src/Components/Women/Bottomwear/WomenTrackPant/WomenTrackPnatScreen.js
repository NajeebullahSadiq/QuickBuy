
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listWomenShirts, listWomenTrackPants } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import WomenTrackPant from './WomenTrackPant'
// import MenTshirtsData from './MenTshirtsData';



export default function WomenTrackPantScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listWomenTrackPants());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <WomenTrackPant key = {product._id} product ={product}></WomenTrackPant>
  )
  }
 </div>
             )}
        </div>
    )
};
