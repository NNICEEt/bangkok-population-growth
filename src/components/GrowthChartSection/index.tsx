import useBangkokPopulationGrowth from "hooks/useBangkokPopulationGrowth";
import { useState } from "react";
import * as constants from "./constants";
import Dropdown from "../Dropdown";
import BarChart from "components/BarChart";

const GrowthChartSection = () => {
  const [district, setDistrict] = useState();
  const [startYear, setStartYear] = useState("2550");
  const [endYear, setEndYear] = useState("2559");

  const {
    districtList,
    districtPopulationGrowth,
    selectDistrictPopulationGrowth,
  } = useBangkokPopulationGrowth();

  const handleSelect = (value: string) => {
    console.log(value);
  };

  console.log(districtPopulationGrowth);

  const axisY = constants.YEARS.filter(
    (item) => +item.value >= +startYear || +item.value <= +endYear
  ).map((item) => item.value);
  const data = {
    labels: [
      "2%",
      "40%",
      "10%",
      "90%",
      "120%",
      "2%",
      "40%",
      "10%",
      "90%",
      "120%",
    ],
    values: [20, 40, 10, 90, 120, 20, 40, 10, 90, 120],
  };

  return (
    <div>
      <div className="text-18 font-bold">{constants.TITLE}</div>
      <div className="mt-24px flex sm: flex-col md:flex-row gap-18px justify-between">
        <div className="flex">
          <div className="w-50px">{constants.DISTRICT}</div>
          <select
            defaultValue=""
            className="text-black"
            onChange={(e) => {
              selectDistrictPopulationGrowth(+e.target.value);
            }}
          >
            <option value="" disabled>
              กรุณาเลือกเขต
            </option>
            {districtList.map((district) => (
              <option key={district.dcode} value={district.dcode}>
                {district.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-18px">
          <div className="flex">
            <div className="w-50px">{constants.SINCE}</div>
            <Dropdown
              data={constants.YEARS}
              defaultValue={startYear}
              onSelect={handleSelect}
            />
          </div>
          <div className="flex">
            <div className="w-30px">{constants.TO}</div>
            <Dropdown
              data={constants.YEARS}
              defaultValue={endYear}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </div>
      <BarChart height={165} labels={axisY} data={data} />
    </div>
  );
};

export default GrowthChartSection;
