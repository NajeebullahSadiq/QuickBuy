
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenTShirts, listMenWatches } from '../../../../Actions/ProductActions';
import LoadingBox from '../../../LoadingBox';
import MessageBox from '../../../MessageBox';
import '../../../Screens/HomeScreen.css'
import MenWatches from './MenWatches'
// import MenTshirtsData from './MenTshirtsData';



export default function MenWatchesScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(listMenWatches());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <MenWatches key = {product._id} product ={product}></MenWatches>
  )
  }
 </div>
             )}
        </div>
    )
};
