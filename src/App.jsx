import React from "react";
import "./styles/app.scss";
import "./styles/nav.scss";
import HeroSection from "./components/HeroSection.jsx";
import WhatWeDo from "./components/WhatWeDo";
import OurMentors from "./components/OurMentors";
import OurResources from "./components/OurResources";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <HeroSection />
      <WhatWeDo />
      <OurMentors />
      <OurResources />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
