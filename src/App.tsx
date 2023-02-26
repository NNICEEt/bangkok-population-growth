import { useState } from "react";
import Hero from "components/Hero";
import GrowthChartSection from "components/GrowthChartSection";
import Footer from "components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-darkgray px-20px py-28px text-white">
      <div className="container flex flex-col gap-34px">
        <Hero />
        <GrowthChartSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
