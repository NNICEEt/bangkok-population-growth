import { BarStyled } from "./styled";

interface BarProps {
  value: number;
  height: number;
  label?: string;
}

const Bar = ({ value, height, label }: BarProps) => {
  return (
    <BarStyled width={value + "%"} height={height + "px"}>
      {label && <span>{label}</span>}
    </BarStyled>
  );
};

export default Bar;
