import React from 'react';
import { styled } from 'styled-components';

interface StyledOptions {
  color: string;
  fontSize: number;
  fontWeight: 400 | 500 | 600;
  lineheight: 9.6 | 14.4 | 19.2 | 24 | 26 | 28.8 | 60;
}
interface StyledSpanProps extends StyledOptions {
  text: string;
}
const StyledSpan = ({ ...props }: StyledSpanProps) => {
  return (
    <Span
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      lineheight={props.lineheight}
    >
      {props.text}
    </Span>
  );
};

export default StyledSpan;

const Span = styled.span<StyledOptions>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineheight }) => `${lineheight}px`};
`;
