import { WHITE } from "foundation/color";
import { font8 } from "foundation/typography/fontSize";
import styled, { css } from "styled-components";

const flexPositionCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BarChartWrapper = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  margin-top: 30px;

  display: flex;
  align-items: stretch;

  ${font8}
`;

export const LabelWrapper = styled.div`
  width: 50px;
  border-right: 2px solid ${WHITE};

  ${flexPositionCSS};
`;

export const BarWrapper = styled.div`
  flex: 1;
  border-right: 2px solid ${WHITE};

  ${flexPositionCSS};

  position: relative;
`;

export const MinLabel = styled.div`
  position: absolute;
  top: -20px;
`;

export const MaxLabel = styled.div`
  position: absolute;
  top: -20px;
  left: 100%;

  transform: translateX(-100%);
`;

export const Label = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;

  display: flex;
  align-items: center;
`;
