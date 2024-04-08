import React from 'react';
import { styled } from 'styled-components';

interface StyledOptions {
  color: string;
  fontSize: 16 | 32;
  fontWeight: 600 | 700;
  lineheight: 19.2 | 38.4;
}
interface StyledTitleProps extends StyledOptions {
  text: string;
}
const StyledTitle = ({ ...props }: StyledTitleProps) => {
  return (
    <Title
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      lineheight={props.lineheight}
    >
      {props.text}
    </Title>
  );
};

export default StyledTitle;

const Title = styled.h1<StyledOptions>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineheight }) => `${lineheight}px`};
  margin: 0px;
`;
