import React from "react";
import "./TravelCollection.scss";

import travel01 from "../assets/travel01.jpg";
import travel02 from "../assets/travel02.jpg";
import travel03 from "../assets/travel03.jpg";

const cards = [
  {
    title: "Destination Spotlights",
    desc: "Discover hidden gems, iconic landmarks, and local experiences through immersive video tours that bring each destination to life.",
    image: travel01,
    large: true,
  },
  {
    title: "Travel Webinars",
    desc: "Join expert-led sessions to learn how to plan smarter, pack better, and travel more sustainably—perfect for both beginners and seasoned explorers.",
    image: travel02,
  },
  {
    title: "Cultural Insights",
    desc: "Explore rich traditions, diverse cuisines, and fascinating stories from around the globe. A deeper look into the heart of every journey.",
    image: travel03,
  },
  {
    title: "Adventure Highlights",
    desc: "From mountain treks to tropical cruises, get a taste of the thrill before you book. These videos showcase the excitement of travel at its best.",
    image: travel01,
  },
];


const TravelCollection = () => {
  return (
    <section className="travel-collection">
      <div className="headerTravel">
        <p className="subtext">
          Ready to explore? Tune into our travel videos and webinars packed with insider tips, cultural gems, and destination highlights. Whether you're booking your next trip or building your bucket list, we'll help you travel smarter and dream bigger.
        </p>
        <h2>Travel Collection</h2>
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
              <p>{cards[1].desc}</p>
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
                <p>{card.desc}</p>
              </div>
              <div className="arrow-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCollection; 