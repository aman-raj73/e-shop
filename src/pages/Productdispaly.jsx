import React from 'react'
// import { Shopcontext } from '../Context/Shopcontext';
import { FaStar } from 'react-icons/fa'
const Productdispaly = (props) => {
  const {product} = props;
  return (
    <>
    <div className="container" style={{marginTop:'100px'}}>
      <div className="row">
        <div className="col-2">
          <img src={product.image} alt="" className='img-fluid' style={{height:'200px'}}/>
          <img src={product.image} alt="" className='img-fluid' style={{height:'200px'}}/>
          <img src={product.image} alt="" className='img-fluid' style={{height:'200px'}}/>
        </div>
        <div className="col-4">
          <img src={product.image} alt="" className='img-fluid'/>
        </div>
        <div className="col-6">
          <h2>{product.name}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore odio, culpa similique dignissimos doloribus tempora repellat placeat eaque accusamus magnam perspiciatis reiciendis tempore, laborum sint a libero rem. Nulla.</p>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Productdispaly
