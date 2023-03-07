import React, { useMemo } from "react";
import useBangkokPopulationStore from "store/useBangkokPopulationStore";
import YearsDropdown from "components/YearsDropdown";
import * as locales from "./locales";

const ChartFilter = () => {
  const { bangkokPopulationGrowth, currentStartYear, currentEndYear } =
    useBangkokPopulationStore((state) => ({
      bangkokPopulationGrowth: state.bangkokPopulationGrowth,
      currentStartYear: state.currentStartYear,
      currentEndYear: state.currentEndYear,
    }));

  const {
    setCurrentStartYear,
    setCurrentEndYear,
    setCurrentDistrictPopulationGrowth,
  } = useBangkokPopulationStore((state) => ({
    setCurrentStartYear: state.setCurrentStartYear,
    setCurrentEndYear: state.setCurrentEndYear,
    setCurrentDistrictPopulationGrowth:
      state.setCurrentDistrictPopulationGrowth,
  }));

  const districtList = useMemo(() => {
    if (!bangkokPopulationGrowth) return [];

    return bangkokPopulationGrowth.map(({ dcode, name }) => ({
      dcode,
      name,
    }));
  }, [bangkokPopulationGrowth]);

  const handleDistrictSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const dcode = +event.target.value;
    const currentDistrictPopulationGrowth = bangkokPopulationGrowth?.find(
      (item) => item.dcode === dcode
    );

    setCurrentDistrictPopulationGrowth(currentDistrictPopulationGrowth!);
  };

  return (
    <div className="mt-24px flex sm: flex-col md:flex-row gap-18px justify-between">
      <div className="flex">
        <div className="w-50px">{locales.DISTRICT}</div>
        <select
          defaultValue=""
          className="text-black"
          onChange={handleDistrictSelect}
        >
          <option value="" disabled>
            {locales.SELECT_DISTRICT}
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
          <div className="w-50px">{locales.SINCE}</div>
          <YearsDropdown
            onSelect={setCurrentStartYear}
            maxYear={currentEndYear}
          />
        </div>
        <div className="flex">
          <div className="w-30px">{locales.TO}</div>
          <YearsDropdown
            onSelect={setCurrentEndYear}
            minYear={currentStartYear}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartFilter;
