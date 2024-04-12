import React from 'react';
import { styled } from 'styled-components';

interface ButtonStyledOptions {
  width: number;
  height: number;
  bgcolor: string;
}
interface ButtonProps extends ButtonStyledOptions {
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = ({ ...props }: ButtonProps) => {
  return (
    <Container
      width={props.width}
      height={props.height}
      bgcolor={props.bgcolor}
      onClick={props.onClick}
    >
      {props.children}
    </Container>
  );
};

export default StyledButton;

const Container = styled.button<ButtonStyledOptions>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border: none;
  border-radius: 4px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ bgcolor }) => `${bgcolor}`};
  cursor: pointer;
`;
