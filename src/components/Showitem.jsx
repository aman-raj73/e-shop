import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Showitem = (props) => {
  let [xyz, setAbc] = useState(false)
  return (
   <>
   <div className="card p-3" onMouseEnter={() =>setAbc(true)} onMouseLeave={() =>setAbc(false)}>
    <div style={{overflow:'hidden',height:'350px'}}>
    <Link to={`/product/${props.id}`}>
    <img src={props.image} alt="" className='img-fluid' 
    style={{
      transition:'1s',
      transform : xyz ? 'scale(1.2)' : ''
    }}
    />
    </Link>

    </div>
    <div className="card-body text-center">
        <h4>{props.name}</h4>
        <span><s>{props.old_price}</s></span>
        <span className='mx-3 fw-bold text-warning'>{props.new_price}</span>
         <h3 className='mt-3 fs-4 fw-bold'>{props.category}</h3>
    </div>
   </div>

   </>
  )
}

export default Showitem
