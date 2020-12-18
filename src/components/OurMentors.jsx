import React from "react";
import { MENTORS } from "../constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const WhatWeDo = () => (
  <div className="mentors-section">
    <h5>Our Mentors</h5>

    <Splide
      options={{
        type: "loop",
        padding: {
          right: "10rem",
          left: "10rem",
        },
        autoWidth: true,
        focus: "center",
        gap: "5rem",
      }}>
      {MENTORS.map((mentor, i) => (
        <SplideSlide>
          <div className="mentor-card">
            <img src={mentor.image} className="card-image" alt="mentor" />
            <div className="mentor-card-body">
              <div className="carousel-buttons">
                <div className="carousel-button left">
                  <span> &#10230;</span>
                </div>
                <div className="carousel-button right">
                  <span> &#10230;</span>
                </div>
              </div>
              <h3>{mentor.name}</h3>
              <p>{mentor.description}</p>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  </div>
);

export default WhatWeDo;
