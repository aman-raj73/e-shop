import React, { useState } from 'react'
// import { Shopcontext } from '../Context/Shopcontext';
import { FaStar } from 'react-icons/fa'
import { FaTag } from 'react-icons/fa';
const Productdispaly = (props) => {
    const {products_display} = props;
  const images = [products_display.image,products_display.image1,products_display.image2];
  const [active, setactive] = useState(0)

  return (
    <>
    <div className="container" style={{marginTop:'100px'}}>
      <div className="row">
        <div className="col-xl-6">
          <div className="row">
        <div className="col-4">

          {images.map((img,idx)=>(

             <img key={idx} src={img} className='img-fluid mb-3' style={{maxHeight:'150px'}} onMouseEnter={()=> setactive(idx)}/>

          ))}
        </div>
        <div className="col-8">
          <div className="card p-2">
          <img src={images[active]} style={{maxHeight:'600px'}} alt="" className='img-fluid'/>
          </div>
        </div>
        </div>
        </div>
        <div className="col-xl-5 offset-xl-1 mt-3">
          <h2 className='fw-bold text-info'>{products_display.name}</h2>
          <p>Description : {products_display.description}</p>
          <span className='fs-2 fw-bold'>Price : <s className='text-danger fs-4'>{products_display.old_price}</s></span>
          <span className='mx-4 fs-4'>₹{products_display.new_price}</span>
          <div className='mt-3 d-flex gap-4'>
            <span className='fw-bold fs-2'>Size</span>
            <div className='p-3 bg-light'>S</div>
            <div className='p-3 bg-light'>M</div>
            <div className='p-3 bg-light'>L</div>
            <div className='p-3 bg-light'>Xl</div>
           
          </div>
          <div className="text-warning mt-3">
          <FaStar className='mx-2'/>
          <FaStar className='mx-2'/>
          <FaStar className='mx-2'/>
          <FaStar className='mx-2'/>
          </div>
          <button className='btn btn-success btn btn-lg mt-3'>Add To Cart</button>
          <button className='btn btn-warning btn btn-lg mt-3 mx-3'>Buy Now</button>

          <div className='mt-3'>
            <h4 className='fw-bold'>Coupons For Use</h4>
            <hr />
            <FaTag className='text-success'/>
            <span className='mx-3'>Bank Offer100% Cashback upto 500Rs on Axis Bank SuperMoney Rupay CC UPI transactions on super.money UPIT&C</span>
             <br />
             <br />
             <hr />
            <FaTag className='text-success'/>
            <span className='mx-3'>Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C</span>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Productdispaly

