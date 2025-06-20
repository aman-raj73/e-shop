import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Showitem from '../components/Showitem';

const Product = (props) => {
    const {all_product} = useContext(Shopcontext);
  return (
   <div className="container" style={{marginTop:'100px'}}>
    <div className="row">
        {all_product.map((item, idx) =>{
            if(props.category === item.category){
            return (
                <div className="col-lg-3 mb-5">
                    <Showitem key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                </div>
                
            )
            }
            else{
                return null;
            }
        })}
    </div>
   </div>
  )
}

export default Product
