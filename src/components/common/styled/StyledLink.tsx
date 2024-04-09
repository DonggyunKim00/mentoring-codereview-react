import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface LinkStyledOptions {
  width: number;
  height: number;
  bgcolor: string;
}
interface LinkProps extends LinkStyledOptions {
  href: string;
  children: React.ReactNode;
}

const StyledLink = ({ ...props }: LinkProps) => {
  return (
    <Container to={props.href} width={props.width} height={props.height} bgcolor={props.bgcolor}>
      {props.children}
    </Container>
  );
};

export default StyledLink;

const Container = styled(Link)<LinkStyledOptions>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border: none;
  border-radius: 4px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ bgcolor }) => `${bgcolor}`};
  text-decoration: none;
`;
