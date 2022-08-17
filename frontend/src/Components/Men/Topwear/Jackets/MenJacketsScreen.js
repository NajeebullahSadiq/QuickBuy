
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenJackets} from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import  MenJackets from './MenJackets.js'
// import MenTshirtsData from './MenTshirtsData';
export default function MenJacketsScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenJackets());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenJackets key = {product._id} product ={product}></MenJackets>
  )
  }
 </div>
             )}
        </div>
    )
};
