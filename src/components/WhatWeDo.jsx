import React from "react";
import { DEMO_ARTISTS } from "../constant";

const OurMentors = () => (
  <div className="what-we-do-section">
    <div className="section-title">
      <h3>
        <span>What we do</span>
      </h3>
    </div>
    <div className="section-content">
      <hr />
      <div className="heading">
        <h5 className="tiny-texts">You’re in great company</h5>
        <p className="">
          Gidara seeks to connect young talented musicians with world class
          producers, managers etc
        </p>
        <div className="carousel-buttons">
          <div className="carousel-button left">
            <span> &#10230;</span>
          </div>
          <div className="carousel-button right">
            <span> &#10230;</span>
          </div>
        </div>
      </div>
      <div>
        <div className="artist-card">
          {DEMO_ARTISTS.map((artist, i) => (
            <div key={i} className="artist-card__single">
              <img src={artist.image} className="card-image" alt="artist" />
              <div className="artist-card-body">
                <h3>{artist.title}</h3>
                <p>{artist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default OurMentors;
