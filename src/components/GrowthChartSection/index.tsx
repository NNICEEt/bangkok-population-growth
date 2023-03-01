import * as locales from "./locales";
import BarChart from "common/components/BarChart";
import ChartFilter from "components/ChartFilter";
import useBangkokPopulationData from "hooks/useBangkokPopulationData";
import useFetchBangkokPopulation from "hooks/useFetchBangkokPopulation";

const GrowthChartSection = () => {
  useFetchBangkokPopulation();
  const { districtPopulationGrowth } = useBangkokPopulationData();

  return (
    <div>
      <div className="text-18 font-bold">{locales.GROWTH}</div>
      <ChartFilter />
      <BarChart
        height={165}
        labels={districtPopulationGrowth.labels}
        data={districtPopulationGrowth.data}
      />
    </div>
  );
};

export default GrowthChartSection;
