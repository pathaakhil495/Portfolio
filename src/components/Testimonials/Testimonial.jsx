import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonial = () => {
  const clients = [
    {
      name: "Electricity Theft Detection in Smart Grids",
      review:
        "Developed a DNN classification model that integrates time-domain and frequency-domain data to enhance theft detection accuracy, utilizing a dataset from the State Grid Corporation of China.",
    },
    {
      name: "Chrome Extension - Cricket Matches API",
      review:
        "Developed a dynamic Chrome extension utilizing HTML, CSS, and JavaScript, providing cricket enthusiasts with real-time match scores, schedules, and player statistics through API integration.",
    },
    {
      name: "Nutritional Sorting",
      review:
        "Developed an algorithm for nutritional sorting which can be used in ecommerce and pharmacy websites to help customers select the best options.",
    },
    {
      name: "Urbano Services",
      review:
        "Developing a website for Urbano Services, providing chief maid and baby care services in Kokapet, Gandipet, and Madhapur.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">

        <span>Projects</span>
     
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-timer settings
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <div className="client-label">
                  <h3>{client.name}</h3>
                </div>
                <p>{client.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
