import React from "react";
import "./Hero.scss";
import Header from "./Header";
import travel01 from "../assets/travel01.jpg";
import travel02 from "../assets/travel02.jpg";
import travel03 from "../assets/travel03.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <div className="hero-content">
        <h4>tours & travel</h4>
        <h1>happiness</h1>
        <p>
          We're your online destination for unforgettable travel experiences. From exotic escapes to cultural journeys, we offer a wide range of tours, packages, and travel accessories—delivered straight from our world of wanderlust to yours!
        </p>
      </div>
      <div className="hero-bottom">
        <div className="travel-card">
          <div className="travel-info">
            <h3>1k+ Curated Tours</h3>
            <p>We want our travelers to feel inspired to pack their bags and dive into the journey of a lifetime.</p>
          </div>
          <div className="travel-images">
            <img src={travel01} alt="travel destination" />
            <img src={travel02} alt="travel destination" />
            <img src={travel03} alt="travel destination" />
            <img src={travel01} alt="travel destination" />
          </div>
        </div>

        <div className="travel-card-btn">
          <button className="down-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg></button>
          <button className="explore-btn">Let the adventure begin</button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
