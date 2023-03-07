import Bar from "./Bar";
import {
  BarChartWrapper,
  LabelWrapper,
  BarWrapper,
  Label,
  MinLabel,
  MaxLabel,
} from "./styled";

interface BarChartProps {
  height: number;
  yAxisDataLabels: string[];
  xDataValues: number[];
  xDataValueLabels: string[];
}

const BarChart = ({
  height,
  yAxisDataLabels,
  xDataValues,
  xDataValueLabels,
}: BarChartProps) => {
  const maxValue = Math.max(...xDataValues);
  const minValue = Math.min(...xDataValues);

  const minValueLabel =
    xDataValueLabels[xDataValues.findIndex((value) => value === minValue)];
  const maxValueLabel =
    xDataValueLabels[xDataValues.findIndex((value) => value === maxValue)];

  const length = yAxisDataLabels.length;
  const rowHeight = (height - 4 * (length - 1)) / length;

  return (
    <BarChartWrapper height={height}>
      <LabelWrapper>
        {yAxisDataLabels.map((item, index) => (
          <Label key={index} height={rowHeight}>
            <span>{item}</span>
          </Label>
        ))}
      </LabelWrapper>
      <BarWrapper>
        <MinLabel>{minValueLabel}</MinLabel>
        <MaxLabel>{maxValueLabel}</MaxLabel>
        {xDataValues.map((value, index) => {
          const barValue = (value / maxValue) * 100;

          return (
            <Bar
              key={index}
              value={barValue}
              height={rowHeight}
              label={xDataValueLabels[index]}
            />
          );
        })}
      </BarWrapper>
    </BarChartWrapper>
  );
};

export default BarChart;
