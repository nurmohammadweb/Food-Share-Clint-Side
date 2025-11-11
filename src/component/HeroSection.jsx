
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from './Banner';


const HeroSection = () => {
  return (
  <div>
      <Banner></Banner>
   <Swiper className=''
    
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          320 : {slidesPerView:1},
          640 : {slidesPerView:2},
          1024 : {slidesPerView:3},
        }}
      
    >
       {({ isActive }) => (
      <div>Current slide is {isActive ? 'active' : 'not active'}</div>
        )}
      
        <SwiperSlide><img  className='rounded-2xl  h-[250px] md:h-[300px] w-full object-cover'  src="https://i.ibb.co.com/fYp4C6k1/Chicken-Biryani.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img  className='rounded-2xl  h-[250px] md:h-[300px] w-full object-cover'  src="https://i.ibb.co.com/zhDmpvP8/Fried-Chicken-Pieces9.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img  className='rounded-2xl  h-[250px] md:h-[300px] w-full object-cover'  src="https://i.ibb.co.com/0VXX8DtR/Pasta-Alfredo5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img  className='rounded-2xl  h-[250px] md:h-[300px] w-full object-cover'  src="https://i.ibb.co.com/jkft5Dkn/Grilled-Chicken-Sandwich6.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img  className='rounded-2xl  h-[250px] md:h-[300px] w-full object-cover'  src="https://i.ibb.co.com/1YttSRGx/Vegetable-Fried-Rice2.jpg" alt="" /></SwiperSlide>
         
      </Swiper>
     
    </div>
   
  );
};

export default HeroSection;