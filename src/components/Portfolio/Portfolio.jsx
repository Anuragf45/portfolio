import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import BooksManagement from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import urlShortner from "../../img/hoc.png";
import MiniBlog from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://github.com/Anuragf45/project3-book-management.git"><img src={BooksManagement} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Anuragf45/Products-Management.git">
          <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Anuragf45/Project-1_MiniBloggingSite.git"><img src={MiniBlog} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Anuragf45/URL-Shortner.git"><img src={urlShortner} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
