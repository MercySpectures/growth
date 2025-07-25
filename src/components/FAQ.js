import React, { useState } from 'react';
import './FAQ.scss';

const faqItems = [
  {
    q: "Ordering for Delivery?",
    a: "We deliver plants and goods to your doorstep. Check our delivery area and schedule to ensure timely arrival and freshness.",
  },
  {
    q: "Potting Services",
    a: "We offer potting in store or you can bring your own. Fees depend on the type of plant and materials used. Ask in store for more info.",
  },
  {
    q: "Do we ship plants?",
    a: "Yes, we ship select plants nationwide. Our packaging ensures safe transit. Refer to our shipping policy for specific regions.",
  },
  {
    q: "Ordering for Pick up?",
    a: "Order online and pick up from our store during open hours. You’ll receive a confirmation once your order is ready.",
  },
  {
    q: "Do plants come with pots?",
    a: "Some plants are sold with decorative pots, while others come in nursery containers. Options are clearly labeled on the product page.",
  },
  {
    q: "How do I care for my plant?",
    a: "Each plant comes with a care card. You can also visit our website for detailed plant care tips based on the species you purchase.",
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
