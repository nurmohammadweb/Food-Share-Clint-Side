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
    <div className="w-full">
      <Banner />

      <div className="max-w-6xl mx-auto mt-10 px-4 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          <SwiperSlide>
            <img
              className="rounded-2xl h-[220px] sm:h-[260px] md:h-[300px] w-full object-cover"
              src="https://i.ibb.co.com/fYp4C6k1/Chicken-Biryani.jpg"
              alt="Chicken Biryani"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-2xl h-[220px] sm:h-[260px] md:h-[300px] w-full object-cover"
              src="https://i.ibb.co.com/zhDmpvP8/Fried-Chicken-Pieces9.jpg"
              alt="Fried Chicken"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-2xl h-[220px] sm:h-[260px] md:h-[300px] w-full object-cover"
              src="https://i.ibb.co.com/0VXX8DtR/Pasta-Alfredo5.jpg"
              alt="Pasta Alfredo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-2xl h-[220px] sm:h-[260px] md:h-[300px] w-full object-cover"
              src="https://i.ibb.co.com/jkft5Dkn/Grilled-Chicken-Sandwich6.jpg"
              alt="Grilled Sandwich"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-2xl h-[220px] sm:h-[260px] md:h-[300px] w-full object-cover"
              src="https://i.ibb.co.com/1YttSRGx/Vegetable-Fried-Rice2.jpg"
              alt="Vegetable Fried Rice"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
