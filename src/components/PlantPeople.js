import React from 'react';
import './PlantPeople.scss';

import leafVideoThumb from '../assets/plant02.jpg';
import smallLeafIcon from '../assets/plant03.jpg';
import smallLeafIconSecond from '../assets/plant01.jpg';

const PlantPeople = () => {
  return (
    <section className="plant-people">
      <div className="left-column">
        <h2>Plants for the People</h2>
        <p>We want our visitors to be inspired to get their hands dirty</p>
      </div>

      <div className="video-thumb">
          <img src={leafVideoThumb} alt="Leaf Video Thumbnail" />
          <div className="play-button">
            ▶
          </div>
        </div>

      <div className="right-column">
        <p>
          Each plant is cared <img src={smallLeafIcon} alt="Leaf Icon" className="inline-leaf" />
          for by our horticultural experts, so they are as happy as <img src={smallLeafIconSecond} alt="Leaf Icon" className="inline-leaf" />healthy as they get.
        </p>
      </div>
    </section>
  );
};

export default PlantPeople;
