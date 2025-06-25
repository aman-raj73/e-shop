import React, { useState } from 'react'
// import banner1 from './asset/banner-1.png'
import handImage from './asset/images.png'

const Section = (props) => {

  
  return (
   <>
   

    <div className="container section-1">
        <div className="row">
            <div className="col-lg-7 mt-5">
            <div className='d-flex align-items-center mt-5' style={{height:'10vh'}}>
            <p className='fs-2' style={{fontFamily:'fantasy'}}>Welcome to our Shop</p>
            <img src={handImage} alt="" height="150px"/>
            </div>
            <h1><span style={{color:'blue'}}>Our men’s casual collection </span>is designed with clean lines, versatile colors.</h1>
            </div>
            <div className="col-lg-5">
           <img src={props.image} alt="" className='img-fluid' style={{maxHeight:'700px'}}/>
            </div>
        </div>
    </div>

   </>
  )
}

export default Section
