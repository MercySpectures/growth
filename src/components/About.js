import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './About.scss';
import travel01 from '../assets/travel01.jpg';

const About = () => {
  return (
    <div className="about-page">
      <Header />

      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About HappinessPlan</h1>
          <p>Your journey to unforgettable adventures starts here</p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-main">
          <div className="ourStory">
            <div className='left'>
              <h2>Our Story</h2>
              <p>
                HappinessPlan was born from a simple belief: that travel should bring joy, create memories, and transform lives.
                We started as a small team of passionate travelers who wanted to share the world's most incredible experiences with others.
                Today, we're proud to be your trusted partner in crafting journeys that go beyond the ordinary.
                From hidden gems to iconic destinations, we curate experiences that inspire, challenge, and delight.
              </p>
            </div>
            <img src={travel01} />
          </div>

          <div className="ourMission">
            <div className='top'>
                
                <p>
                  We believe that every journey should be an adventure that enriches your life.
                  Our mission is to make extraordinary travel accessible, enjoyable, and meaningful for everyone.
                </p>
                <h2>Our Mission</h2>
            </div>
            <div className="mission-points">
              <div className="mission-point">
                <img src={travel01}/>
                <h3>Curated Experiences</h3>
                <p>Hand-picked destinations and activities for every type of traveler</p>
              </div>
              <div className="mission-point">
              <img src={travel01}/>
                <h3>Personalized Service</h3>
                <p>Tailored recommendations and support throughout your journey</p>
              </div>
              <div className="mission-point">
              <img src={travel01}/>
                <h3>Quality Assurance</h3>
                <p>Partnering with the best local guides and accommodations</p>
              </div>
            </div>
          </div>

          <div className="whyChooseUs">
            <h2>Why Choose HappinessPlan?</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>🎯 Expert Curation</h3>
                <p>Every experience is carefully selected by our travel experts</p>
                <img src={travel01}/>
              </div>
              <div className="feature">
                <h3>🏠 Local Connections</h3>
                <p>Authentic experiences through our network of local partners</p>
                <img src={travel01}/>
              </div>
              <div className="feature">
                <h3>📱 Easy Planning</h3>
                <p>Seamless booking and planning tools for stress-free travel</p>
                <img src={travel01}/>
              </div>
              <div className="feature">
                <h3>🛡️ Travel Protection</h3>
                <p>Comprehensive support and protection for your peace of mind</p>
                <img src={travel01}/>
              </div>
              <div className="feature">
                <h3>👥 Community</h3>
                <p>Join a community of passionate travelers and adventurers</p>
                <img src={travel01}/>
              </div>
              <div className="feature">
                <h3>🌱 Sustainable Travel</h3>
                <p>Eco-friendly options that respect local communities and environments</p>
                <img src={travel01}/>
              </div>
            </div>
          </div>

          <div className="team">
            <div className='top'>
            <h2>Our Team</h2>
            <p>
              Meet the passionate travelers and experts behind HappinessPlan.
              Our diverse team brings together decades of experience in travel, hospitality, and adventure tourism.
            </p>
              </div>
            <div className="team-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Travel Experts</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Curated Tours</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Countries</p>
              </div>
              <div className="stat">
                <h3>10K+</h3>
                <p>Happy Travelers</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;