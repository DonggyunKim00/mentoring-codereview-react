import React from 'react';
import styled from 'styled-components';
import ExhibitionList from '@components/common/Exhibition/ExhibitionList';
import Footer from '@components/common/Footer';

const HomePage = () => {
  return (
    <Container>
      <ExhibitionList />
      <Footer />
    </Container>
  );
};

export default HomePage;

export const Container = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;
