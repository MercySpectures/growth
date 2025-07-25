import React from "react";
import "./IndoorCollection.scss";

import philodendron from "../assets/plant01.jpg";
import calathea from "../assets/plant02.jpg";
import lowLight from "../assets/plant02.jpg";
import peperomia from "../assets/plant03.jpg";

const cards = [
  {
    title: "Philodendron",
    desc: "Philodendron comes in a variety of leaf shapes and colors, making it a great plant to complement your home decor while also being low maintenance.",
    image: philodendron,
    large: true,
  },
  {
    title: "Calathea",
    desc: "Calathea is known for its decorative foliage featuring vibrant patterns and colors. It prefers indirect light and humidity, making it perfect for indoor spaces.",
    image: calathea,
  },
  {
    title: "Air Purifying",
    desc: "These plants help cleanse the air by removing toxins and improving oxygen levels. Ideal for bedrooms, living rooms, and workspaces.",
    image: peperomia,
  },
  {
    title: "Low Light Tolerant",
    desc: "Perfect for rooms with minimal sunlight, these plants thrive in shaded corners and bring life to low-light areas without needing much care.",
    image: lowLight,
  },
];


const IndoorCollection = () => {
  return (
    <section className="indoor-collection">
      <div className="headerIndoor">
        <p className="subtext">
          Check out our video content including informative webinars where you
          can learn more about your indoor plants.
        </p>
        <h2>Indoor Collection</h2>
      </div>

      <div className="grid-container">
        <div className="row row-top">
          <div className="card large">
            <img src={cards[0].image} alt={cards[0].title} />
            <div className="overlay dark">
              <h3>{cards[0].title}</h3>
              <p>{cards[0].desc}</p>
            </div>
            <div className="arrow-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></div>
          </div>

          <div className="card">
            <img src={cards[1].image} alt={cards[1].title} />
            <div className="overlay light">
              <h3>{cards[1].title}</h3>
              <p>{cards[0].desc}</p>
            </div>
            <div className="arrow-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></div>
          </div>
        </div>

        <div className="row row-bottom">
          {cards.slice(2).map((card, idx) => (
            <div className="card" key={idx}>
              <img src={card.image} alt={card.title} />
              <div className="overlay light">
                <h3>{card.title}</h3>
                <p>{cards[0].desc}</p>
              </div>
              <div className="arrow-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndoorCollection;
