import { BarStyled } from "./styled";

interface BarProps {
  value: number;
  marginLeft: number;
  height: number;
  label?: string;
}

const Bar = ({ value, marginLeft, height, label }: BarProps) => {
  return (
    <BarStyled
      marginLeft={marginLeft + "%"}
      width={value + "%"}
      height={height + "px"}
    >
      {label && <span>{label}</span>}
    </BarStyled>
  );
};

export default Bar;
