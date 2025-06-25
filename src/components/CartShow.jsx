import React, { useContext } from 'react'
import { FaDeleteLeft } from 'react-icons/fa6'
// import all_product from '../asset/all_product'
import { Shopcontext } from '../Context/Shopcontext'

const CartShow = () => {
  const {cartItem,all_product} = useContext(Shopcontext);
  return (
    <>
    <div className="cartItem" style={{marginTop:'120px'}}>
        <div className='d-flex justify-content-around fs-4 fw-bold text-info mt-5'>
        <p>Product</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <hr />

         {all_product.map((e) =>{
            if(cartItem[e.id] > 0){
              return (
                <div key={e.id} className='d-flex justify-content-around fs-4 fw-bold'>
        <img src={e.image} alt="" style={{height:'100px'}} />
         <p>{e.name}</p>
         <p className='p-2 bg-light d-flex gap-3'>
            <span className='fs-3 text-success'>+</span>
            {cartItem[e.id]}
            <span className='fs-3 text-danger'>-</span>
            </p>
        <p>{e.new_price * cartItem[e.id]}</p>
        <FaDeleteLeft/>
    </div>
                
              )
            }
            return null;
          })}

    
    </div>

    <div className="container mt-5">
      <h2 className='text-center'>Cart Total</h2>
      <div className="row justify-content-center">
        <div className="col-6 bg-light p-3 border border-2 rounded">
          <div className='d-flex justify-content-between'>
          <div>
            <p>Total</p>
            <hr />
            <p>Total Items</p>
            <hr />
            <p>Shipping Charges</p>
            <hr />
          </div>
          <div>
            <p>500</p>
            <hr />
            <p>1</p>
            <hr />
            <p>free</p>
            <hr />
            <button className='btn btn-success'>Proceed To checkout</button>
          </div>
          </div>
        </div>
      </div>
    </div>

  </>  
  )
}

export default CartShow
