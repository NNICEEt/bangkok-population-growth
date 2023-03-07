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
  const minValue = Math.min(...xDataValues);
  const maxValue = Math.max(...xDataValues);

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
          let barValue = 0;
          let marginLeftValue = 0;

          if (Math.sign(minValue) === Math.sign(maxValue)) {
            let numerator = value;
            let denominator = maxValue;
            if (value < 0) {
              numerator = maxValue;
              denominator = value;
            }

            barValue = (Math.abs(numerator) / Math.abs(denominator)) * 100;
          } else {
            barValue =
              (value / maxValue) *
              (Math.abs(maxValue) / (maxValue - minValue)) *
              100;
            marginLeftValue =
              (Math.abs(minValue) / (maxValue - minValue)) * 100;

            if (value < 0) {
              barValue =
                (Math.abs(value) / Math.abs(minValue)) *
                (Math.abs(minValue) / (maxValue - minValue)) *
                100;
              marginLeftValue =
                (Math.abs(value - minValue) / (maxValue - minValue)) * 100;
            }
          }

          return (
            <Bar
              key={index}
              value={barValue}
              marginLeft={marginLeftValue}
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
