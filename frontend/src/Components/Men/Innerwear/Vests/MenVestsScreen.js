
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listMenVasts } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import MenVests from './MenVests';
// import MenTshirtsData from './MenTshirtsData';



export default function MenVestsScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenVasts());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenVests key = {product._id} product ={product}></MenVests>
  )
  }
 </div>
             )}
        </div>
    )
};
