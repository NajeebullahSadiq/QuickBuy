
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenBoxers} from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import MenBoxers from './MenBoxers';
// import MenTshirtsData from './MenTshirtsData';



export default function MenBoxersScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenBoxers());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenBoxers key = {product._id} product ={product}></MenBoxers>
  )
  }
 </div>
             )}
        </div>
    )
};
