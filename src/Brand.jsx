import React from 'react'
import logo1 from './asset/logo1.jpeg'
import logo2 from './asset/logo2.jpeg'
import logo3 from './asset/logo3.jpeg'
import logo4 from './asset/logo4.jpeg'
import logo5 from './asset/logo5.jpeg'
import logo6 from './asset/logo6.jpeg'
import logo7 from './asset/logo7.jpeg'
import logo8 from './asset/logo8.jpeg'
import logo9 from './asset/logo9.jpeg'
import logo10 from './asset/logo10.jpeg'

const logos = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10];
const Brand = () => {
    
  return (
    <>
    <div className="logo-marquee my-5">
      <h1 className='text-center fs-1 fw-bold'>Our Top Brands</h1>
      <div className="marquee-wrapper py-5">
        <div className="marquee-track my-3">
            {logos.map((logo, idx)=>(
                <img key={`first${idx}`} src={logo} className='img-fluid'/>
            ))}
            {logos.map((logo, idx)=>(
                <img key={`second${idx}`} src={logo} className='img-fluid'/>
            ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Brand
