
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenTShirts } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import MenTshirts from './MenTshirts';
// import MenTshirtsData from './MenTshirtsData';



export default function MenTShirtsScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenTShirts());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenTshirts key = {product._id} product ={product}></MenTshirts>
  )
  }
 </div>
             )}
        </div>
    )
};
