import React from "react";
import "./Hero.scss";
import Header from "./Header";
import plant01 from "../assets/plant01.jpg";
import plant02 from "../assets/plant02.jpg";
import plant03 from "../assets/plant03.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <div className="hero-content">
        <h4>Petal power</h4>
        <h1>growth</h1>
        <p>
          We're your online houseplant destination. We offer a wide range of
          houseplants and accessories shipped directly from our {`{green}house`}{" "}
          to yours!
        </p>
      </div>
      <div className="hero-bottom">
        <div className="plant-card">
          <div className="plant-info">
            <h3>100+Plants</h3>
            <p>We want our visitors to be inspired to get their hands dirty</p>
          </div>
          <div className="plant-images">
            <img src={plant01} alt="leaf" />
            <img src={plant02} alt="leaf" />
            <img src={plant03} alt="leaf" />
          </div>
        </div>

        <div className="plant-card-btn">
          <button className="down-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg></button>
          <button className="shop-btn">Shop tropical plants</button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
