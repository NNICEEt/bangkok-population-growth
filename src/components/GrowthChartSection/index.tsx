import useBangkokPopulationData from "hooks/useBangkokPopulationData";
import { useState } from "react";
import * as constants from "./constants";
import classnames from "classnames";

const GrowthChartSection = () => {
  const [district, setDistrict] = useState();
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();

  const { districtList, yearList } = useBangkokPopulationData();

  const axisY = [1, 2, 3, 4, 5];
  const data = [20, 40, 5, 66, 55];

  return (
    <div>
      <div className="text-18 font-bold">{constants.TITLE}</div>
      <div className="mt-24px flex sm: flex-col md:flex-row gap-18px justify-between">
        <div className="flex">
          <div className="w-50px">{constants.DISTRICT}</div>
          <select defaultValue="" className="text-black">
            <option value="" disabled>
              กรุณาเลือกเขต
            </option>
            {districtList.map((district, index) => (
              <option key={index}>{district}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-18px">
          <div className="flex">
            <div className="w-50px">{constants.SINCE}</div>
            <select defaultValue="" className="text-black">
              <option value="" disabled>
                กรุณาเลือกปี
              </option>
              {yearList.map((year, index) => (
                <option key={index}>{year}</option>
              ))}
            </select>
          </div>
          <div className="flex">
            <div className="w-30px">{constants.TO}</div>
            <select defaultValue="" className="text-black">
              <option value="" disabled>
                กรุณาเลือกปี
              </option>
              {yearList.map((year, index) => (
                <option key={index}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthChartSection;
