import React from 'react';
import ExhibitionList from '@components/common/Exhibition/ExhibitionList';
import Footer from '@components/common/Footer';
import { useExhibitionList } from '@hooks/useExhibition';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { PageLayout } from '@components/common/styled/PageLayout';

const HomePage = () => {
  const { list, isLoading } = useExhibitionList();

  return (
    <PageLayout>
      {isLoading ? (
        <LoadingSpinner width={40} height={40} $borderWidth={3} />
      ) : (
        <ExhibitionList list={list} />
      )}
      <Footer />
    </PageLayout>
  );
};

export default HomePage;
