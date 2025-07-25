import React, { useState } from 'react';
import './NewPlants.scss';

import peperomia from '../assets/plant01.jpg';
import fiddleLeaf from '../assets/plant02.jpg';
import calathea from '../assets/plant03.jpg';

const plantData = [
  {
    name: 'Peperomia Plants',
    desc: 'Moist but well-drained',
    price: '$122,056',
    img: peperomia,
  },
  {
    name: 'Fiddle-Leaf Fig',
    desc: 'Medium moisture, well-draining',
    price: '$160,265',
    img: fiddleLeaf,
  },
  {
    name: 'Calathea Orbifolia',
    desc: 'Moist but well-drained',
    price: '$152,056',
    img: calathea,
  },
  {
    name: 'Rubber Plant',
    desc: 'Requires bright indirect light',
    price: '$115,300',
    img: fiddleLeaf,
  },
  {
    name: 'Snake Plant',
    desc: 'Tolerates low light and dry air',
    price: '$98,750',
    img: peperomia,
  },
  {
    name: 'Peace Lily',
    desc: 'Beautiful white flowers indoors',
    price: '$134,800',
    img: calathea,
  },
  {
    name: 'Spider Plant',
    desc: 'Fast-growing, child-friendly',
    price: '$120,000',
    img: calathea,
  },
  {
    name: 'ZZ Plant',
    desc: 'Low light and low water needs',
    price: '$105,500',
    img: peperomia,
  },
  {
    name: 'Chinese Evergreen',
    desc: 'Great air purifier with patterns',
    price: '$109,999',
    img: fiddleLeaf,
  },
];

const NewPlants = () => {
  const [activePage, setActivePage] = useState(0);
  const cardsPerPage = 3;

  const totalPages = Math.ceil(plantData.length / cardsPerPage);

  const startIndex = activePage * cardsPerPage;
  const visibleCards = plantData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="new-plants-section">
      <div className="top">
        <div>
          <h2>New Plants</h2>
        </div>
        <p>
          Bring nature inside and shop our big selections of fresh indoor
          plants, including Instagram-worthy houseplants, pet-friendly plants,
          orchids and one-of-a-kind rare plants.
        </p>
      </div>

      <div className="plants-container">
        {visibleCards.map((plant, index) => (
          <div className="plant-card" key={index}>
            <div className="plant-img">
              <img src={plant.img} alt={plant.name} />
              <span className="dot-btn"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></span>
            </div>
            <div className="plant-info">
              <h3>{plant.name}</h3>
              <p className="desc">{plant.desc}</p>
              <div className="price-row">
                <span className="price">{plant.price}</span>
                <button className="arrow-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></button>
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

export default NewPlants;
