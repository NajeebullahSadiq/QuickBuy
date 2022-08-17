
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listGirlsSandals} from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import GirlsSandals from './GirlsSandals';
// import MenTshirtsData from './MenTshirtsData';

export default function GirlsSandalsScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listGirlsSandals());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <GirlsSandals key = {product._id} product ={product}></GirlsSandals>
  )
  }
 </div>
             )}
        </div>
    )
};
