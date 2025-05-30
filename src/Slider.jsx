import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import mens from './asset/banner-1.png'
import handImage from './asset/images.png'
import womens from './asset/womens.png'
import kids from './asset/kids.png'

// import './styles.css';

// import required modules
import { Parallax,Autoplay } from 'swiper/modules';
import Section from './Section';

const Slider = () => {
  return (
<>
<div className="main" style={{height:'auto',background:'linear-gradient(180deg,#47fdae,#e1ffea22 60%)',marginTop:'86px'}}>
 <Swiper
       
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          
        }}
        navigation={true}
        modules={[Parallax,Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="text" data-swiper-parallax="-100">
          <Section image={mens}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className="text" data-swiper-parallax="-100">
           <Section image={womens}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text" data-swiper-parallax="-100">
           <Section image={kids}/>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
</>
  )
}

export default Slider
