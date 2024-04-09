import React from 'react';
import { styled } from 'styled-components';
import ExhibitionItem from './ExhibitionItem';

const ExhibitionList = () => {
  return (
    <Container>
      <ExhibitionItem />
      <ExhibitionItem />
      <ExhibitionItem />
      <ExhibitionItem />
    </Container>
  );
};

export default ExhibitionList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`;
