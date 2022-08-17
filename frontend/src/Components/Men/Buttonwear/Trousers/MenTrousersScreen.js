
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenTrousers } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import MenTrousers from './MenTrousers.js'
// import MenTshirtsData from './MenTshirtsData';



export default function MenTrousersScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenTrousers());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenTrousers key = {product._id} product ={product}></MenTrousers>
  )
  }
 </div>
             )}
        </div>
    )
};
