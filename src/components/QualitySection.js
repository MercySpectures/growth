import React from 'react';
import './QualitySection.scss';
import videoThumbnail from '../assets/travel02.jpg'; // replace with your image

const QualitySection = () => {
  return (
    <section className="quality-section">
      <h2>Curated Journeys & Authentic Experience</h2>
      <p className="subtitle">
        We offer a thoughtfully curated selection of travel experiences—from serene nature escapes to vibrant cultural immersions. Our handcrafted itineraries prioritize quality over quantity, featuring locally guided tours, boutique stays, and immersive activities. Whether it's a scenic trek, a culinary adventure, or a heritage walk, each journey is designed to be a living story—crafted with care, rooted in authenticity.
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
