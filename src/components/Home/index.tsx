import React from 'react';
import styled from 'styled-components';
import ExhibitionList from '@components/common/Exhibition/ExhibitionList';
import Footer from '@components/common/Footer';
import { useExhibitionList } from '@hooks/useExhibition';
import LoadingSpinner from '@components/common/LoadingSpinner';

const HomePage = () => {
  const { list, isLoading } = useExhibitionList();

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner width={40} height={40} $borderWidth={3} />
      ) : (
        <ExhibitionList list={list} />
      )}
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
