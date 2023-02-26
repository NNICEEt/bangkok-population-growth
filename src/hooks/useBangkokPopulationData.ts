import data from "data/bangkok_population-growth.json";

const useBangkokPopulationData = () => {
  const getDistrictList = () => {
    return data.map((item) => item.name);
  };

  const getYear = () => {
    return Object.keys(data[0]).filter((key) => !isNaN(Number(key)));
  };

  const getBangkokPopulationGrowth = (startDate: number, endDate: number) => {
    return;
  };

  return {
    districtList: getDistrictList(),
    yearList: getYear(),
    getBangkokPopulationGrowth,
  };
};

export default useBangkokPopulationData;
