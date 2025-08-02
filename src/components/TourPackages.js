import React, { useState } from 'react';
import './TourPackages.scss';

import travel01 from '../assets/travel01.jpg';
import travel02 from '../assets/travel02.jpg';
import travel03 from '../assets/travel03.jpg';

const tourData = [
  {
    name: "Pet-Friendly Escape",
    desc: "Safe, scenic stays for families with pets",
    price: "$1,220",
    img: travel01,
  },
  {
    name: "Mountain Trekking Adventure",
    desc: "Guided hikes with panoramic views",
    price: "$1,600",
    img: travel02,
  },
  {
    name: "Cultural City Tour",
    desc: "Explore museums, markets, and heritage sites",
    price: "$1,520",
    img: travel03,
  },
  {
    name: "Romantic Beach Retreat",
    desc: "Oceanfront stays with candlelit dinners",
    price: "$1,150",
    img: travel01,
  },
  {
    name: "Desert Safari Experience",
    desc: "Camel rides, dune bashing, and stargazing",
    price: "$987",
    img: travel02,
  },
  {
    name: "Wellness Spa Getaway",
    desc: "Yoga, meditation, and holistic therapies",
    price: "$1,348",
    img: travel03,
  },
  {
    name: "Weekend City Escape",
    desc: "Quick recharge in vibrant urban settings",
    price: "$1,200",
    img: travel01,
  },
  {
    name: "Budget Backpacking Trip",
    desc: "Low-cost travel with high adventure",
    price: "$1,055",
    img: travel02,
  },
  {
    name: "Tropical Island Cruise",
    desc: "Snorkeling, beach lounging, and island hopping",
    price: "$1,099",
    img: travel03,
  },
];

const TourPackages = () => {
  const [activePage, setActivePage] = useState(0);
  const cardsPerPage = 3;

  const totalPages = Math.ceil(tourData.length / cardsPerPage);

  const startIndex = activePage * cardsPerPage;
  const visibleCards = tourData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="tour-packages-section">
      <div className="top">
        <div>
          <h2>Featured Tours</h2>
        </div>
        <p>
          Discover our carefully curated collection of unforgettable travel experiences—perfect for every type of adventurer. From family-friendly escapes to romantic getaways, adventure expeditions to luxury retreats, we've got the perfect journey for your next adventure.
        </p>
      </div>

      <div className="tours-container">
        {visibleCards.map((tour, index) => (
          <div className="tour-card" key={index}>
            <div className="tour-img">
              <img src={tour.img} alt={tour.name} />
              <span className="favorite-btn"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></span>
            </div>
            <div className="tour-info">
              <h3>{tour.name}</h3>
              <p className="desc">{tour.desc}</p>
              <div className="price-row">
                <span className="price">{tour.price}</span>
                <button className="book-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${activePage === index ? 'active' : ''}`}
            onClick={() => setActivePage(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TourPackages; 