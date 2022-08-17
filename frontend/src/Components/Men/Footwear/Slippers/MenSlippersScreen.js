
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenSlippers, listMenTShirts } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import MenSlippers from './MenSlippers';
// import MenTshirtsData from './MenTshirtsData';



export default function MenSlippersScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenSlippers());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenSlippers key = {product._id} product ={product}></MenSlippers>
  )
  }
 </div>
             )}
        </div>
    )
};
