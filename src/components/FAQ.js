import React, { useState } from 'react';
import './FAQ.scss';

const faqItems = [
  {
    q: "How do I book a tour?",
    a: "You can book directly through our website. Simply choose your destination, select dates, and follow the checkout process. A confirmation email will be sent once your booking is complete.",
  },
  {
    q: "Do you offer custom itineraries?",
    a: "Yes! We specialize in personalized travel planning. Share your interests and preferences, and our team will craft a custom itinerary just for you.",
  },
  {
    q: "Are flights included in the packages?",
    a: "Some packages include flights, while others focus on ground experiences. Each listing clearly states what's included. Feel free to contact us for clarification.",
  },
  {
    q: "Can I travel with pets?",
    a: "We offer select pet-friendly travel options. Look for the 'Pet-Friendly' tag on our packages or reach out to us for recommendations.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Our cancellation policy varies by package and provider. You’ll find detailed terms on each booking page. We also offer flexible options for select tours.",
  },
  {
    q: "Do you offer group discounts?",
    a: "Yes, we provide special rates for group bookings. Whether you're planning a family trip, corporate retreat, or school tour, contact us for a custom quote.",
  },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="faq-section">
      {faqItems.map((item, i) => (
        <div
          key={i}
          className={`faq-item ${openIndex === i ? 'open' : ''}`}
          onClick={() => toggleIndex(i)}
        >
          <div className="faq-header">
            <h3>{item.q}</h3>
            <div className="arrow">{openIndex === i ? <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>}</div>
          </div>

          <div className="faq-answer-wrapper">
            <p className="faq-answer">{item.a}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
