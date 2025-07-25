import React, { useState } from "react";
import "./CategorySection.scss";

import petImg from "../assets/plant01.jpg";
import orchidImg from "../assets/plant02.jpg";
import succulentImg from "../assets/plant03.jpg";

const categories = [
  "Outdoor Plant",
  "Indoor Plant",
  "Flower Pot",
  "Potted Plant",
];

const allCards = {
  "Outdoor Plant": [
    {
      title: "Pet Friendly Plants",
      description:
        "These houseplants are ideal for homes with pets and kids. They are completely non-toxic and safe, while adding greenery and beauty to your indoor environment. They are also easy to care for and thrive in different lighting conditions.",
      image: petImg,
      tag: "Peperomia",
    },
    {
      title: "Orchids",
      description:
        "Orchids are a popular choice for those seeking elegant, long-lasting blooms. These delicate flowers are easy to maintain with proper care and add a touch of sophistication to any space. Great for gifting or home decor.",
      image: orchidImg,
      tag: "Araceae",
    },
    {
      title: "Succulents",
      description:
        "Succulents are drought-tolerant, low-maintenance plants that come in many shapes and colors. They are perfect for busy lifestyles and small spaces. Place them near windows for the best growth and style your shelves with ease.",
      image: succulentImg,
      tag: "Monocots",
    },
  ],
  "Indoor Plant": [
    {
      title: "Fiddle Leaf Fig",
      description:
        "Known for its large, sculptural leaves, this plant adds a modern vibe to interiors. It thrives in bright, indirect sunlight and prefers consistent watering. With the right care, it can become a statement piece in any room.",
      image: orchidImg,
      tag: "Ficus lyrata",
    },
    {
      title: "ZZ Plant",
      description:
        "This nearly indestructible plant is ideal for low-light spaces and requires minimal watering. Its glossy green leaves add a fresh touch to offices or homes. It’s perfect for beginners or forgetful plant parents.",
      image: succulentImg,
      tag: "Zamioculcas",
    },
    {
      title: "Pothos",
      description:
        "Pothos is a fast-growing, trailing plant that purifies air and thrives in various light conditions. It is extremely easy to propagate and perfect for hanging baskets. A top choice for both new and seasoned plant lovers.",
      image: petImg,
      tag: "Epipremnum",
    },
  ],
  "Flower Pot": [
    {
      title: "Terracotta Pot",
      description:
        "Terracotta pots are made from clay, providing excellent drainage for plant roots. Their earthy color complements green foliage beautifully. Ideal for succulents, herbs, and other water-sensitive plants indoors or out.",
      image: petImg,
      tag: "Clay Pot",
    },
    {
      title: "Self-Watering Pot",
      description:
        "These pots include a reservoir that supplies water to your plant over time. Perfect for those who travel or forget to water often. They help reduce root rot and maintain consistent moisture levels.",
      image: orchidImg,
      tag: "Smart Pot",
    },
    {
      title: "Hanging Pot",
      description:
        "Hanging pots are great space-savers and perfect for trailing or vining plants. Whether placed indoors near a window or outdoors on patios, they add vertical interest and aesthetic charm to any setting.",
      image: succulentImg,
      tag: "Macramé",
    },
  ],
  "Potted Plant": [
    {
      title: "Snake Plant",
      description:
        "This upright plant is a favorite due to its architectural shape and low-maintenance nature. It tolerates low light and infrequent watering. Plus, it’s known to purify air and improve indoor air quality.",
      image: succulentImg,
      tag: "Sansevieria",
    },
    {
      title: "Peace Lily",
      description:
        "Peace Lilies are known for their elegant white blooms and air-purifying abilities. They thrive in shade and require minimal upkeep. These plants are a timeless addition to both home and office interiors.",
      image: orchidImg,
      tag: "Spathiphyllum",
    },
    {
      title: "Spider Plant",
      description:
        "Spider plants are fast-growing and excellent for beginners. They produce “babies” or offshoots you can replant. Their arching leaves look striking in hanging baskets or on shelves, and they also purify the air.",
      image: petImg,
      tag: "Chlorophytum",
    },
  ],
};

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Outdoor Plant");
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
              <span className="tag">🌿 {card.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
