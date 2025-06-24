import React, { useContext } from 'react'
import { Shopcontext }  from '../Context/Shopcontext'
import Showitem from '../components/Showitem';

const Shopcategory = ({type}) => {
    const {all_product} = useContext(Shopcontext);
  return (
   <div className="container" style={{marginTop:'100px'}}>
    <div className="row">
        {all_product.map((item, idx) =>{
            if(type === item.type){
            return (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 mb-3">
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

export default Shopcategory
