import { LIGHTPINK, PINK, WHITE } from "common/foundation/color";
import { font8 } from "common/foundation/typography/fontSize";
import styled from "styled-components";

interface BarProps {
  width: string;
  height: string;
}

export const BarStyled = styled.div<BarProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${PINK};

  color: transparent;
  ${font8};

  display: flex;
  justify-content: center;
  align-items: center;

  :hover,
  :active,
  :focus {
    background-color: ${LIGHTPINK};
    color: ${WHITE};
  }
`;
