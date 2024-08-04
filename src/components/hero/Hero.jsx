import React from "react";
import BgImage from "../../assets/hero-bg.png";
import HeroImg from "../../assets/hero.png";
import learners from "../../assets/learners.png";
import Navbar from "../navbar/Navbar";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <>
      <section style={bgStyle} className="pt-3">
        {/* Navbar section */}
        <div className="container">
          <div className="fixed top-3 left-0 w-full z-[999999]">
            <Navbar />
          </div>
        </div>
        <div className="container min-h-[700px] grid grid-cols-1 md:grid-cols-2">
          {/* Text content section */}
          <div></div>
          {/* Hero Image section */}
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
