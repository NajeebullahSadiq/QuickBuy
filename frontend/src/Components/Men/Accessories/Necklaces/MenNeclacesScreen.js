
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenNecklaces, listMenTShirts } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import MenNecklaces from './MenNecklaces'
// import MenTshirtsData from './MenTshirtsData';



export default function MenNecklacesScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenNecklaces());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenNecklaces key = {product._id} product ={product}></MenNecklaces>
  )
  }
 </div>
             )}
        </div>
    )
};
