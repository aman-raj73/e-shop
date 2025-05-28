import React from 'react'
import banner1 from './asset/banner-1.png'
import handImage from './asset/images.png'

const Section = () => {
  return (
   <>
   

    <div className="container">
        <div className="row">
            <div className="col-lg-7 mt-5">
            <div className='d-flex align-items-center mt-5' style={{height:'10vh'}}>
            <p className='fs-2' style={{fontFamily:'fantasy'}}>Welcome to our Shop</p>
            <img src={handImage} alt="" height="150px"/>
            </div>
            <h1 style={{lineHeight:'70px', fontSize:'60px', fontWeight:'700'}}><span style={{color:'blue'}}>Our men’s casual collection </span>is designed with clean lines, versatile colors.</h1>
            </div>
            <div className="col-lg-5">
           <img src={banner1} alt="" className='img-fluid' style={{height:'700px'}}/>
            </div>
        </div>
    </div>

   </>
  )
}

export default Section
