import React from 'react';
import './TravelPeople.scss';

import tourVideoThumb from '../assets/travel01.jpg';
import smallIcon from '../assets/travel02.jpg';
import smallIconSecond from '../assets/travel03.jpg';

const TravelPeople = () => {
  return (
    <section className="travel-people">
      <div className="left-column">
        <h2>Journeys for the People</h2>
        <p>We want our visitors to be inspired to step out, explore boldly, and make memories that last a lifetime.</p>
      </div>

      <div className="video-thumb">
          <img src={tourVideoThumb} alt="Travel Video Thumbnail" />
          <div className="play-button">
            ▶
          </div>
        </div>

      <div className="right-column">
        <p>
          Each experience is crafted <img src={smallIcon} alt="Travel Icon" className="inline-travel" /> by our travel experts, so your adventures are as thrilling <img src={smallIconSecond} alt="Travel Icon" className="inline-travel" /> and seamless as they get
        </p>
      </div>
    </section>
  );
};

export default TravelPeople; 