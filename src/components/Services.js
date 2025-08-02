import React from "react";
import "./Services.scss";
import Header from "./Header";
import Footer from "./Footer";

const services = [
  {
    title: "Personalized Travel Planning",
    description: "Custom itineraries tailored to your preferences, budget, and travel style. From luxury getaways to budget adventures, we craft the perfect journey for you.",
    icon: "🌍",
    features: ["Custom itineraries", "Budget optimization", "Travel style matching", "24/7 support"]
  },
  {
    title: "Adventure & Outdoor Experiences",
    description: "Thrilling outdoor adventures and adrenaline-pumping activities for adventure seekers and nature lovers.",
    icon: "🏞️",
    features: ["Mountain trekking", "Water sports", "Wildlife safaris", "Rock climbing"]
  },
  {
    title: "Luxury Travel & Escapes",
    description: "Premium travel experiences with exclusive access to the world's most luxurious destinations and accommodations.",
    icon: "✨",
    features: ["Luxury accommodations", "VIP experiences", "Private tours", "Concierge services"]
  },
  {
    title: "Family-Friendly Travel",
    description: "Safe, fun, and educational travel experiences designed specifically for families with children of all ages.",
    icon: "👨‍👩‍👧‍👦",
    features: ["Kid-friendly activities", "Educational tours", "Safety-first approach", "Family bonding"]
  },
  {
    title: "Cultural Immersion Tours",
    description: "Deep dive into local cultures, traditions, and authentic experiences that connect you with the heart of each destination.",
    icon: "🏛️",
    features: ["Local experiences", "Cultural workshops", "Traditional cuisine", "Historical insights"]
  },
  {
    title: "Corporate & Group Travel",
    description: "Professional team building experiences and corporate retreats that combine business with unforgettable adventures.",
    icon: "💼",
    features: ["Team building", "Corporate retreats", "Conference travel", "Group discounts"]
  },
  {
    title: "Travel Gear & Equipment",
    description: "Expert recommendations and access to premium travel gear, from smart luggage to adventure equipment.",
    icon: "🎒",
    features: ["Gear recommendations", "Equipment rental", "Packing guides", "Travel accessories"]
  },
  {
    title: "Local Guide Network",
    description: "Connect with certified local guides who provide insider knowledge and authentic experiences in every destination.",
    icon: "🗺️",
    features: ["Certified guides", "Local expertise", "Insider access", "Authentic experiences"]
  }
];

const Services = () => (
  <div className="services-page">
    <Header />
    
    <div className="services-hero">
      <div className="services-hero-content">
        <h1>Our Services</h1>
        <p>Comprehensive travel solutions designed to make every journey extraordinary</p>
      </div>
    </div>

    <section className="services-section">
      <div className="services-intro">
        <h2>What We Offer</h2>
        <p>
          From personalized planning to unforgettable experiences, we provide everything you need 
          to create memories that last a lifetime. Our comprehensive services cover every aspect 
          of your journey, ensuring a seamless and enjoyable travel experience.
        </p>
      </div>
      
      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <div className="service-header">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
            <p className="service-description">{service.description}</p>
            <div className="service-features">
              {service.features.map((feature, index) => (
                <span key={index} className="feature-tag">{feature}</span>
              ))}
            </div>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>

    <section className="why-choose-section">
      <div className="why-choose-content">
        <h2>Why Choose Our Services?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <div className="benefit-icon">🎯</div>
            <h3>Expert Curation</h3>
            <p>Every experience is carefully selected by our travel experts</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🛡️</div>
            <h3>Travel Protection</h3>
            <p>Comprehensive insurance and support for peace of mind</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">💰</div>
            <h3>Best Value</h3>
            <p>Competitive pricing with no hidden fees</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">📱</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance throughout your journey</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;