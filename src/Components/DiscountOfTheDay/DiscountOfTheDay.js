import React from "react";
import "./DiscountOfTheDay.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import OfferCartBox from "../OfferCartBox/OfferCartBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function DiscountOfTheDay() {
  return (
    <>
      <div className="discount-of-the-day-parent">
        <SectionHeader
          text="تخفیف محدود"
          button="مشاهده همه"
          link="/all-discount-of-the-day"
        />

        <div className="discount-of-the-day-item-parent">
          <Swiper
            breakpoints={{
              100: { slidesPerView: 1},
              300: { slidesPerView: 2},
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <OfferCartBox
                title="پردازنده فلان"
                shortName="پردازنده-فلان"
                cover="cpu-3.png"
                price={9000000}
                category="پردازنده"
                currentDate="2024/12/7"
                swiper={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCartBox
                title="هدفون فلان"
                shortName="هدفون-فلان"
                cover="headphone-3.png"
                price={753000}
                category="هدفون"
                currentDate="2024/12/10"
                swiper={true}
                off={500000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCartBox
                title="موبایل سامسونگ"
                shortName="موبایل-سامسونگ"
                cover="mobile-3.png"
                price={1560000}
                category="موبایل"
                currentDate="2024/12/20"
                swiper={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCartBox
                title="پردازنده اینتل"
                shortName="پردازنده-اینتل"
                cover="cpu-2.png"
                price={5400000}
                category="پردازنده"
                currentDate="2024/12/15"
                swiper={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCartBox
                title="هدفون ایسوس"
                shortName="هدفون-ایسوس"
                cover="headphone-4.png"
                price={2000000}
                category="هدفون"
                currentDate="2024/12/6"
                swiper={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCartBox
                title="موبایل اپل"
                shortName="موبایل-اپل"
                cover="mobile-2.png"
                price={180000}
                category="موبایل"
                currentDate="2024/12/2"
                swiper={true}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
