import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function SliderHeader() {
  return (
    <section id="header-slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            <h1>
              Book a table for yourself at a <br /> time convenient for you
            </h1>
            <Link to={"#"}>Book a table</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <h1>
              Book a table for yourself at a <br /> time convenient for you
            </h1>
            <Link to={"#"}>Book a table</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <h1> Tasty & Delicious Food</h1>
            <Link to={"#"}>Book a table</Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default SliderHeader;
