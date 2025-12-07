import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import i1 from '../assets/1.jpg'
import i2 from '../assets/2.jpg'
import i3 from '../assets/3.jpg'
import i4 from '../assets/4.jpg'
import i5 from '../assets/5.jpg'


const Slider = () => {
  return (
    <div>
         <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-120"
      >
        <SwiperSlide> <img className='w-full h-[500px] object-cover' src={i1} alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='w-full h-[500px] object-cover' src={i2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='w-full h-[500px] object-cover' src={i3} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-full h-[500px] object-cover' src={i4} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-full h-[500px] object-cover' src={i5} alt="" /></SwiperSlide>
        
     
      </Swiper>
    </div>
  )
}

export default Slider
