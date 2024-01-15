import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./SliderHeader.css";
import { Link, useNavigate } from "react-router-dom";

export default function SliderHeader() {

  // برای اسلایدر شبیه گالری

  // const navigate = useNavigate()

  // const imagesSlider = [
  //   { id: 1, src: "slider-1.jpg" ,link:"/category/all"},
  //   { id: 2, src: "slider-2.jpg" ,link:"/category/all"},
  //   { id: 3, src: "slider-3.jpg" ,link:"/category/all"},
  //   { id: 4, src: "slider-4.jpg" ,link:"/category/all"},
  // ];

  // const [imgSrc, setImgSrc] = useState(1);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation , Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        className="mySwiper"
      >
        <SwiperSlide><Link to="/all-discount-of-the-day"><img className="img-slider-header" src="./Assets/slider-img-1.webp" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/category/موبایل"><img className="img-slider-header" src="./Assets/slider-img-2.webp" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/all-discount-of-the-day"><img className="img-slider-header" src="./Assets/slider-img-3.webp" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/all-discount-of-the-day"><img className="img-slider-header" src="./Assets/slider-img-4.webp" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/all-discount-of-the-day"><img className="img-slider-header" src="./Assets/slider-img-5.webp" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/category/لوازم-آرایشی"><img className="img-slider-header" src="./Assets/slider-img-6.webp" alt="" /></Link></SwiperSlide>
      </Swiper>



        {/* برای اسلایدر شبیه گالری */}

      {/* <div class="section over-hide px-4 px-sm-0 slider-parent">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8 align-self-center padding-tb my-2 py-4">
              <div class="section mx-auto text-center">
              <ul className="ul-slider" onClick={()=> {
                imagesSlider.map( item => {
                  item.id === imgSrc && navigate(item.link)
                })
              }}>
                  {imagesSlider.map(
                    (item) =>
                      item.id == imgSrc && (
                          <li className="li-slider" >
                            <img
                              src={`/Assets/${item.src}`}
                              className="img-li-slider"
                              alt=""
                            />
                          </li>
                      )
                  )}
                </ul>
                <div>
                {imagesSlider.map((image) => (
                  <>
                    <input
                      class="checkbox-slider"
                      type="radio"
                      id="slide-1"
                      name="slider"
                    />
                    <label
                      for="slide-1"
                      className={image.id === imgSrc && "active-slider-label"}
                      onClick={() => setImgSrc(image.id)}
                      style={{ backgroundImage: `url(/Assets/${image.src})` }}
                    ></label>
                  </>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
