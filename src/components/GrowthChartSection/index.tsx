import BarChart from "common/components/BarChart";
import ChartFilter from "components/ChartFilter";
import useShowChartData from "./hooks/useShowChartData";

import * as locales from "./locales";

const GrowthChartSection = () => {
  const { yAxisDataLabels, xDataValueLabels, xDataValues } = useShowChartData();
  console.table({ yAxisDataLabels, xDataValueLabels, xDataValues });

  console.log("growth... component");

  return (
    <div>
      <div className="text-18 font-bold">{locales.GROWTH}</div>
      <ChartFilter />
      <BarChart
        height={165}
        yAxisDataLabels={yAxisDataLabels}
        xDataValueLabels={xDataValueLabels}
        xDataValues={xDataValues}
      />
    </div>
  );
};

export default GrowthChartSection;
