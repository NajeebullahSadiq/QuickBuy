
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenJeans} from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import MenJeans from './MenJeans.js'
// import MenTshirtsData from './MenTshirtsData';



export default function MenJeansScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenJeans());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenJeans key = {product._id} product ={product}></MenJeans>
  )
  }
 </div>
             )}
        </div>
    )
};
