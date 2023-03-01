import YearsDropdown from "components/YearsDropdown";
import * as locales from "./locales";
import useBangkokPopulationData from "hooks/useBangkokPopulationData";
import useBangkokPopulationStore from "store/useBangkokPopulationStore";

const ChartFilter = () => {
  const { districtList } = useBangkokPopulationData();
  const { currentStartYear, currentEndYear } = useBangkokPopulationStore(
    (state) => ({
      currentStartYear: state.currentStartYear,
      currentEndYear: state.currentEndYear,
    })
  );

  const { setCurrentStartYear, setCurrentEndYear } = useBangkokPopulationStore(
    (state) => ({
      setCurrentStartYear: state.setCurrentStartYear,
      setCurrentEndYear: state.setCurrentEndYear,
    })
  );

  const { setDistrictPopulationGrowth } = useBangkokPopulationData();

  return (
    <div className="mt-24px flex sm: flex-col md:flex-row gap-18px justify-between">
      <div className="flex">
        <div className="w-50px">{locales.DISTRICT}</div>
        <select
          defaultValue=""
          className="text-black"
          onChange={(e) => {
            setDistrictPopulationGrowth(+e.target.value);
          }}
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
