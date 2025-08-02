import React from "react";
import "./Contact.scss";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => (
  <div className="contact-page">
    <Header />
    
    <div className="contact-hero">
      <div className="contact-hero-content">
        <h1>Contact Us</h1>
        <p>Ready to start your next adventure? Let's make it happen together</p>
      </div>
    </div>

    <section className="contact-section">
      <div className="contact-intro">
        <h2>Get in Touch</h2>
        <p>
          Whether you have questions about our services, need help planning your trip, 
          or want to share your travel experiences, we're here to help. 
          Our team of travel experts is ready to assist you every step of the way.
        </p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Connect With Us</h3>
          <div className="contact-items">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <h4>Email Us</h4>
                <p>hello@happinessplan.com</p>
                <span className="contact-note">We respond within 24 hours</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
                <span className="contact-note">Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <h4>Visit Us</h4>
                <p>123 Travel Street, Adventure City, AC 12345</p>
                <span className="contact-note">By appointment only</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💬</span>
              <div className="contact-details">
                <h4>Live Chat</h4>
                <p>Available on our website</p>
                <span className="contact-note">24/7 instant support</span>
              </div>
            </div>
          </div>
        </div>
        
        <form className="contact-form">
          <h3>Send us a Message</h3>
          <p>Tell us about your dream adventure and we'll help you make it a reality.</p>
          
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Select Service</option>
                <option value="travel-planning">Travel Planning</option>
                <option value="adventure-tours">Adventure Tours</option>
                <option value="luxury-travel">Luxury Travel</option>
                <option value="family-travel">Family Travel</option>
                <option value="corporate-travel">Corporate Travel</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          
          <div className="form-group">
            <textarea placeholder="Tell us about your travel dreams, preferences, and any specific requirements..." rows="6" required></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            <span>Send Message</span>
            <span className="btn-icon">✈️</span>
          </button>
        </form>
      </div>
    </section>

    <section className="faq-preview">
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How far in advance should I book?</h4>
            <p>We recommend booking at least 3-6 months in advance for international trips and 1-2 months for domestic travel.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer travel insurance?</h4>
            <p>Yes, we provide comprehensive travel insurance options to protect your investment and give you peace of mind.</p>
          </div>
          <div className="faq-item">
            <h4>Can you customize itineraries?</h4>
            <p>Absolutely! We specialize in creating personalized itineraries tailored to your preferences, budget, and travel style.</p>
          </div>
          <div className="faq-item">
            <h4>What if I need to cancel my trip?</h4>
            <p>We offer flexible cancellation policies. The specific terms depend on your booking and the services included.</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;