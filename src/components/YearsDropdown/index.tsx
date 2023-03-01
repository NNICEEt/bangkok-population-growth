import * as locales from "./locales";
import useBangkokPopulationData from "hooks/useBangkokPopulationData";

interface YearsDropdownDropdownProps {
  onSelect: (year: number) => void;
  minYear?: number;
  maxYear?: number;
}

const MAX_YEAR = 9999;

const YearsDropdown = ({
  onSelect,
  minYear = 0,
  maxYear = MAX_YEAR,
}: YearsDropdownDropdownProps) => {
  const { yearList } = useBangkokPopulationData();

  const yearOptions = yearList.map((year) => ({
    label: `${locales.BE} ${year}`,
    value: year,
  }));

  return (
    <select
      defaultValue=""
      className="text-black"
      onChange={(e) => onSelect(Number(e.target.value))}
    >
      <option value="" disabled>
        {locales.SELECT_YEAR}
      </option>
      {yearOptions.map((item, index) => {
        const { label, value } = item;
        const optionDisabled = value < minYear || value > maxYear;

        return (
          <option key={index} value={value} disabled={optionDisabled}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default YearsDropdown;
