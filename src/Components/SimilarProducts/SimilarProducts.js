import React from 'react'
import "./SimilarProducts.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CartBox from "../CartBox/CartBox";


export default function SimilarProducts() {
  return (
    <>
    <div className='similar-product'>
        <h3 className="text-left-product-info">محصولات مشابه</h3>

        <div className="new-products mt-3">
          <Swiper
            breakpoints={{
              100: { slidesPerView: 1.5 },
              300: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 4 },
            }}
            slidesPerView={4}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CartBox
                title="پردازنده فلان"
                shortName="پردازنده-فلان"
                cover="watch-3.png"
                price={9000000}
                category="پردازنده"
                swiper={true}
                off={8000000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CartBox
                title="هدفون فلان"
                shortName="هدفون-فلان"
                cover="headphone-3.png"
                price={753000}
                category="هدفون"
                swiper={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CartBox
                title="موبایل سامسونگ"
                shortName="موبایل-سامسونگ"
                cover="watch-1.png"
                price={1560000}
                category="موبایل"
                swiper={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CartBox
                title="پردازنده اینتل"
                shortName="پردازنده-اینتل"
                cover="watch-2.png"
                price={5400000}
                category="پردازنده"
                swiper={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CartBox
                title="هدفون ایسوس"
                shortName="هدفون-ایسوس"
                cover="blutooth-3.png"
                price={2000000}
                category="هدفون"
                swiper={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CartBox
                title="موبایل اپل"
                shortName="موبایل-اپل"
                cover="blutooth-2.png"
                price={180000}
                category="موبایل"
                swiper={true}
              />
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
    </>
  )
}
