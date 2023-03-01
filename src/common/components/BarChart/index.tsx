import Bar from "./Bar";
import {
  BarChartWrapper,
  LabelWrapper,
  BarWrapper,
  Label,
  MinLabel,
  MaxLabel,
} from "./styled";
import { DataProp } from "./types";

interface BarChartProps {
  labels: string[];
  data: DataProp;
  height: number;
}

const BarChart = ({ labels, data, height }: BarChartProps) => {
  const { labels: dataLabels, values } = data;

  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);

  const minValueLabel =
    dataLabels[values.findIndex((value) => value === minValue)];
  const maxValueLabel =
    dataLabels[values.findIndex((value) => value === maxValue)];

  const length = values.length || labels.length;
  const rowHeight = (height - 4 * (length - 1)) / length;

  return (
    <BarChartWrapper height={height}>
      <LabelWrapper>
        {labels.map((item, index) => (
          <Label key={index} height={rowHeight}>
            <span>{item}</span>
          </Label>
        ))}
      </LabelWrapper>
      <BarWrapper>
        <MinLabel>{minValueLabel}</MinLabel>
        <MaxLabel>{maxValueLabel}</MaxLabel>
        {values.map((value, index) => {
          const barValue = (value / maxValue) * 100;

          return (
            <Bar
              key={index}
              value={barValue}
              height={rowHeight}
              label={dataLabels[index]}
            />
          );
        })}
      </BarWrapper>
    </BarChartWrapper>
  );
};

export default BarChart;
