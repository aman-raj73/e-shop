import React from 'react'

const Item = (props) => {
  return (
   <>
   <div className="card p-3">
    <img src={props.image} alt="" className='img-fluid' />
    <div className="card-body text-center">
        <span><s>{props.old_price}</s></span>
        <span className='mx-3 fw-bold text-warning'>{props.new_price}</span>
    </div>
   </div>

   </>
  )
}

export default Item
