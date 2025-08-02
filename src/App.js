import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Hero from "./components/Hero";
import TravelPeople from "./components/TravelPeople";
import TourPackages from "./components/TourPackages";
import TravelCollection from "./components/TravelCollection";
import QualitySection from "./components/QualitySection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CategorySection from "./components/CategorySection";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function Home() {
  return (
    <div className="main">
      <Hero />
      <div className="content">
        <section className="travel-section">
          <TravelPeople />
          <CategorySection />
        </section>
        <TourPackages />
        <TravelCollection />
        <QualitySection />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;