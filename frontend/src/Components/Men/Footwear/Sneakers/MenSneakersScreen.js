
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenSneakers } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import MenSneakers from './MenSneakers'
// import MenTshirtsData from './MenTshirtsData';



export default function MenSneakersScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenSneakers());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenSneakers key = {product._id} product ={product}></MenSneakers>
  )
  }
 </div>
             )}
        </div>
    )
};
