import React from 'react';
import styled from 'styled-components';
import ExhibitionList from './ExhibitionList';

const HomePage = () => {
  return (
    <Container>
      <ExhibitionList />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;
