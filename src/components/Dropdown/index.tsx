interface DropdownProps {
  data: { label: string; value: string | number }[];
  defaultValue?: string;
  defaultOption?: string;
  defaultOptionDisabled?: boolean;
  onSelect: (value: string) => void;
}

const Dropdown = ({
  data,
  defaultValue,
  defaultOption,
  defaultOptionDisabled,
  onSelect,
}: DropdownProps) => {
  return (
    <select
      defaultValue={defaultValue}
      className="text-black"
      onChange={(e) => onSelect(e.target.value)}
    >
      {defaultOption && (
        <option value="" disabled={defaultOptionDisabled}>
          {defaultOption}
        </option>
      )}
      {data.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
