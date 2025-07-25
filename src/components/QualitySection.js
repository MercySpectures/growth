import React from 'react';
import './QualitySection.scss';
import videoThumbnail from '../assets/plant01.jpg'; // replace with your image

const QualitySection = () => {
  return (
    <section className="quality-section">
      <h2>Quality Plants & Curated Goods</h2>
      <p className="subtitle">
        We offer a carefully curated selection of indoor and outdoor plants, hand crafted home goods that put
        quality ahead of quantity, and living art made right here in the shop: terrariums, landscapes,
        arrangements, vessels, and holders.
      </p>

      <div className="video-wrapper">
        <img src={videoThumbnail} alt="Video Thumbnail" />
        <button className="play-btn">
          <span><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e3e3e3"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg></span>
        </button>
      </div>
    </section>
  );
};

export default QualitySection;
