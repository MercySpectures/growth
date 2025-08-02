import React, { useState } from "react";
import "./CategorySection.scss";

import travelImg01 from "../assets/travel01.jpg";
import travelImg02 from "../assets/travel02.jpg";
import travelImg03 from "../assets/travel03.jpg";

const categories = [
  "Outdoor Adventures",
  "City Escapes",
  "Travel Gear",
  "Luxury Escapes",
];

const allCards = {
  "Outdoor Adventures": [
    {
      title: "Pet-Friendly Trips",
      description:
        "These travel packages are ideal for families with pets and kids. They feature non-restrictive accommodations and safe outdoor activities, while offering plenty of scenic beauty and relaxation.",
      image: travelImg01,
      tag: "👨‍👩‍👧‍👦 Family Travel",
    },
    {
      title: "Mountain Treks",
      description:
        "Perfect for adventure seekers, these treks take you through breathtaking landscapes and rugged trails. Great for hiking enthusiasts and nature lovers looking to disconnect.",
      image: travelImg02,
      tag: "🥾 Hiking",
    },
    {
      title: "Desert Safaris",
      description:
        "Explore vast dunes, ride camels, and camp under the stars. These low-maintenance adventures offer high-impact beauty and unforgettable cultural experiences.",
      image: travelImg03,
      tag: "🌵 Desert",
    },
  ],
  "City Escapes": [
    {
      title: "Urban Retreats",
      description:
        "Modern stays in bustling cities with access to museums, cafes, and nightlife. Ideal for travelers who love culture, convenience, and curated experiences.",
      image: travelImg01,
      tag: "🏙️ City Life",
    },
    {
      title: "Weekend Getaways",
      description:
        "Quick escapes to charming towns or nearby cities. Perfect for busy professionals or spontaneous travelers looking to recharge.",
      image: travelImg02,
      tag: "🧳 Short Trips",
    },
    {
      title: "Cultural Tours",
      description:
        "Dive into local traditions, architecture, and cuisine. These guided tours offer immersive experiences in historic neighborhoods and cultural landmarks.",
      image: travelImg03,
      tag: "🏛️ Heritage",
    },
  ],
  "Travel Gear": [
    {
      title: "Smart Luggage",
      description:
        "Trackable, durable, and designed for modern travelers. These suitcases offer built-in chargers, compartments, and sleek design for stress-free travel.",
      image: travelImg01,
      tag: "⚙️ Tech Gear",
    },
    {
      title: "Self-Cleaning Bottles",
      description:
        "Perfect for long journeys, these bottles use UV technology to purify water and reduce waste. Stay hydrated wherever you go.",
      image: travelImg02,
      tag: "🌳 Eco Travel",
    },
    {
      title: "Hiking Backpacks",
      description:
        "Lightweight and ergonomic, these backpacks are built for outdoor adventures. With multiple compartments and weather-resistant materials, they’re ready for any terrain.",
      image: travelImg03,
      tag: "🎒 Adventure Gear",
    },
  ],
  "Luxury Escapes": [
    {
      title: "Beach Resorts",
      description:
        "Relax in tropical paradise with ocean views, spa treatments, and gourmet dining. These resorts offer the ultimate in comfort and indulgence.",
      image: travelImg01,
      tag: "🦩 Tropical",
    },
    {
      title: "Wellness Retreats",
      description:
        "Rejuvenate with yoga, meditation, and holistic therapies. These peaceful destinations are designed to restore balance and well-being.",
      image: travelImg02,
      tag: "😌 Mind & Body",
    },
    {
      title: "Romantic Getaways",
      description:
        "Elegant escapes for couples—perfect for honeymoons, anniversaries, or spontaneous romance. Think candlelit dinners and scenic strolls.",
      image: travelImg03,
      tag: "🤗 Couples",
    },
  ],
};


const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Outdoor Adventures");
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleCardClick = (index) => {
    setExpandedIndex(index);
  };

  const cardsData = allCards[selectedCategory];

  return (
    <section className="category-section">
      <div className="category-tabs">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`tab ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat);
              setExpandedIndex(0);
            }}
          >
            {cat}
          </button>
        ))}
        <button className="see-all">See All</button>
      </div>

      <div className="category-cards">
        {cardsData.map((card, i) => (
          <div
            className={`card ${expandedIndex === i ? "clicked" : "unclicked"}`}
            key={i}
            onClick={() => handleCardClick(i)}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {expandedIndex === i && (
                <div className="arrow-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25px"
                    viewBox="0 -960 960 960"
                    width="25px"
                    fill="#000"
                  >
                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="line"></div>
            <div className="card-footer">
              <span className="tag">{card.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
