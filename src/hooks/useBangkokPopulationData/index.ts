import { DataProp } from "common/components/BarChart/types";
import useBangkokPopulationStore from "store/useBangkokPopulationStore";

const useBangkokPopulationData = () => {
  const {
    bangkokPopulationGrowth,
    currentDistrict,
    currentStartYear,
    currentEndYear,
  } = useBangkokPopulationStore((state) => ({
    bangkokPopulationGrowth: state.bangkokPopulationGrowth,
    currentDistrict: state.currentDistrict,
    currentStartYear: state.currentStartYear,
    currentEndYear: state.currentEndYear,
  }));

  const setCurrentDistrict = useBangkokPopulationStore(
    (state) => state.setCurrentDistrict
  );

  const getDistrictList = () => {
    if (!bangkokPopulationGrowth) return [];

    return bangkokPopulationGrowth.map(({ dcode, name }) => ({
      dcode,
      name,
    }));
  };

  const getYearList = () => {
    if (!bangkokPopulationGrowth) return [];

    const totalStringYearsInData = bangkokPopulationGrowth.flatMap((item) =>
      Object.keys(item).filter((key) => !isNaN(Number(key)))
    );

    return [...new Set(totalStringYearsInData.map((year) => Number(year)))];
  };

  const setDistrictPopulationGrowth = (dcode: number) => {
    const currentDistrictPopulationGrowth = bangkokPopulationGrowth?.find(
      (item) => item.dcode === dcode
    );

    setCurrentDistrict(currentDistrictPopulationGrowth!);
  };

  const getDistrictPopulationGrowth = () => {
    if (!currentStartYear || !currentEndYear || !currentDistrict)
      return { labels: [], data: { labels: [], values: [] } as DataProp };

    const yearRangeSelectedOfDistrict = Object.entries(currentDistrict).filter(
      ([key, _]) => +key >= currentStartYear && +key <= currentEndYear
    );

    return {
      labels: yearRangeSelectedOfDistrict.map(([key, _]) => key),
      data: {
        labels: yearRangeSelectedOfDistrict.map(([_, value]) => value),
        values: yearRangeSelectedOfDistrict.map(([_, value]) =>
          value.slice(0, -1)
        ),
      } as DataProp,
    };
  };

  return {
    districtList: getDistrictList(),
    yearList: getYearList(),
    districtPopulationGrowth: getDistrictPopulationGrowth(),
    setDistrictPopulationGrowth,
  };
};

export default useBangkokPopulationData;
