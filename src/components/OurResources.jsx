import React from "react";
import { DEMO_ARTISTS } from "../constant";

const OurResources = () => (
  <div className="resources-section">
    <div className="section-title">
      <h3>
        <span>Resources</span>
      </h3>
    </div>
    <div className="section-content">
      <hr />
      <div className="heading">
        <h5 className="tiny-texts">Resources for student artists</h5>
      </div>
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
      <div className="view-all">
        <button>
          <span>VIEW ALL RESOURCES &#10230;</span>
        </button>
      </div>
      <hr />
      <div className="heading">
        <h5 className="tiny-texts">Resources for graduate artists</h5>
      </div>
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
      <div className="view-all">
        <button>
          <span>VIEW ALL RESOURCES &#10230;</span>
        </button>
      </div>
    </div>
  </div>
);

export default OurResources;
