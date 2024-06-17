import Footer from "components/Footer";
import GrowthChartSection from "components/GrowthChartSection";
import Hero from "components/Hero";
import useFetchBangkokPopulation from "hooks/useFetchBangkokPopulation";

const RootPage = () => {
  useFetchBangkokPopulation();

  console.log("root page");

  return (
    <div className="container flex flex-col gap-34px">
      <Hero />
      <GrowthChartSection />
      <Footer />
    </div>
  );
};

export default RootPage;
