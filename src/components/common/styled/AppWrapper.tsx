import React from 'react';
import { styled } from 'styled-components';

const AppWrapper = ({ ...props }) => {
  return <Container>{props.children}</Container>;
};

export default AppWrapper;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
