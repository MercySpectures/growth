import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import PlantPeople from "./components/PlantPeople";
import NewPlants from "./components/NewPlants";
import IndoorCollection from "./components/IndoorCollection";
import QualitySection from "./components/QualitySection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CategorySection from "./components/CategorySection";

function App() {
  return (
    <div className="main">
      <Hero />
      <div className="content">
        <section className="plants-section">
          <PlantPeople />
          <CategorySection />
        </section>
        <NewPlants />
        <IndoorCollection />
        <QualitySection />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;