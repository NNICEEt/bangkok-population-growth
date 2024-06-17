import { DistrictPopulationGrowth } from "models";
import useBangkokPopulationStore from "store/useBangkokPopulationStore";

interface Return {
  yAxisDataLabels: string[];
  xDataValues: number[];
  xDataValueLabels: string[];
}

const useShowChartData = (): Return => {
  const { currentDistrictPopulationGrowth, currentStartYear, currentEndYear } =
    useBangkokPopulationStore((state) => ({
      currentDistrictPopulationGrowth: state.currentDistrictPopulationGrowth,
      currentStartYear: state.currentStartYear,
      currentEndYear: state.currentEndYear,
    }));

  if (
    !currentDistrictPopulationGrowth ||
    !currentStartYear ||
    !currentEndYear
  ) {
    return { yAxisDataLabels: [], xDataValues: [], xDataValueLabels: [] };
  }

  const yearsRange = currentEndYear - currentStartYear + 1;

  const getYAxisDataLabels = () => {
    return Array(yearsRange)
      .fill(0)
      .map((_, index) => String(currentStartYear + index));
  };

  const getXData = () => {
    const yAxisDataLabels = getYAxisDataLabels();

    const dataValues = yAxisDataLabels.map((label) => {
      const data =
        currentDistrictPopulationGrowth[
          label as keyof DistrictPopulationGrowth
        ].toString();

      return data;
    });

    return dataValues;
  };

  const getXDataValues = () => {
    const xData = getXData();

    return xData.map((data) => Number(data.slice(0, -1)));
  };

  return {
    yAxisDataLabels: getYAxisDataLabels(),
    xDataValues: getXDataValues(),
    xDataValueLabels: getXData(),
  };
};

export default useShowChartData;
