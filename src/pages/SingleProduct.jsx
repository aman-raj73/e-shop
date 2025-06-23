import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Productdispaly from './Productdispaly';

const SingleProduct = () => {
    const {all_product} = useContext(Shopcontext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === parseInt(productId));
  return (
    <Productdispaly products_display={product}/>
  )
}

export default SingleProduct
