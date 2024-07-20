import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
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
          <img src={Sidebar} alt="" />
          <div className="project-description">
            <strong>Oracle Chatbot</strong>
            <p>Developed a Dialogflow chatbot, demonstrating expertise in business strategy, technology, and customer engagement.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <div className="project-description">
            <strong>Electricity Theft Detection in Smart Grids</strong>
            <p>Developed a DNN classification model that integrates time-domain and frequency-domain data to enhance theft detection accuracy, utilizing a dataset from the State Grid Corporation of China.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <div className="project-description">
            <strong>Chrome Extension - Cricket Matches API</strong>
            <p>Developed a dynamic Chrome extension utilizing HTML, CSS, and JavaScript, providing cricket enthusiasts with real-time match scores, schedules, and player statistics through API integration.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
          <div className="project-description">
            <strong>Nutritional Sorting</strong>
            <p>Developed an algorithm for nutritional sorting which can be used in ecommerce and pharmacy websites to help customers select the best options.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
          <div className="project-description">
            <strong>Urbano Services</strong>
            <p>Developing a website for Urbano Services, providing chief maid and baby care services in Kokapet, Gandipet, and Madhapur.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
