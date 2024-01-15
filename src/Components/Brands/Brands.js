import React from 'react'
import "./Brands.css"
import {AiFillStar} from "react-icons/ai"
import BrandsBox from './BrandsBox/BrandsBox'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';


export default function Brands() {
  return (
   <>
   <div className='brands-parent'>
    <h4><AiFillStar/> محبوب ترین برند ها</h4>
    <div className='brands-items-parent'>
    <Swiper
        slidesPerView={5}
        breakpoints={{
          100: { slidesPerView: 2},
          300: { slidesPerView: 2},
          576: { slidesPerView: 2.5 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 5 },
        }}
        spaceBetween={0}
        navigation={true}
        freeMode={true}
        modules={[ Navigation]}
        className="mySwiper swiper-brands"
      >
        <SwiperSlide><BrandsBox cover="mi-brand.png"/></SwiperSlide>
        <SwiperSlide><BrandsBox cover="kale-brand.png"/></SwiperSlide>
        <SwiperSlide><BrandsBox cover="pegah-brand.png"/></SwiperSlide>
        <SwiperSlide><BrandsBox cover="persil-brand.png"/></SwiperSlide>
        <SwiperSlide><BrandsBox cover="active-brand.jpg"/></SwiperSlide>
        <SwiperSlide><BrandsBox cover="samsung-brand.jpg"/></SwiperSlide>
        <SwiperSlide><BrandsBox cover="huawi-brand.png"/></SwiperSlide>
      </Swiper>
        
    </div>
   </div>
   </>
  )
}
