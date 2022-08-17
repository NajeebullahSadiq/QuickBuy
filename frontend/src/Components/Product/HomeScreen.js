
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Product.css';
import { fullListOfProducts } from '../../Actions/ProductActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import Product from './Product.js'

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList );
    const {loading,error,products} = productList;
    useEffect(() => {
    dispatch(fullListOfProducts());
    }, [dispatch]);
    return (
        <div>

{loading? (<LoadingBox></LoadingBox>)
            :
             error? (<MessageBox variant = "danger">{error}</MessageBox>)
             : (
            <div className="row center">
  {products.map((product)=>
   <Product key = {product._id} product ={product}></Product>
  )
  }
 </div>
             )}
        </div>
    )
}
