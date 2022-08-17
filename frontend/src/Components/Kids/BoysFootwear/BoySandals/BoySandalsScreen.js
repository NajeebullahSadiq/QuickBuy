
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listBoySandals} from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import BoySandals from './BoysSandals'
// import MenTshirtsData from './MenTshirtsData';



export default function BoySandalsScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listBoySandals());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <BoySandals key = {product._id} product ={product}></BoySandals>
  )
  }
 </div>
             )}
        </div>
    )
};
