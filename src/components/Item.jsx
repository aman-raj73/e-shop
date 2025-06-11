import React, { useState } from 'react'

const Item = (props) => {
  let [xyz, setAbc] = useState(false)
  return (
   <>
   <div className="card p-3" onMouseEnter={() =>setAbc(true)} onMouseLeave={() =>setAbc(false)}>
    <div style={{overflow:'hidden'}}>
    <img src={props.image} alt="" className='img-fluid' 
    style={{
      transition:'1s',
      transform : xyz ? 'scale(1.2)' : ''
    }}
    />
    </div>
    <div className="card-body text-center">
        <span><s>{props.old_price}</s></span>
        <span className='mx-3 fw-bold text-warning'>{props.new_price}</span>
    </div>
   </div>

   </>
  )
}

export default Item
