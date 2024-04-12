import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useExhibitionItem } from '@hooks/useExhibition';
import Header from './Header';
import Content from './Content';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { styled } from 'styled-components';
import { PageLayout } from '@components/common/styled/PageLayout';

const ReservationPage = () => {
  const [param] = useSearchParams();
  const id = param.get('id');

  const { item, isLoading } = useExhibitionItem(Number(id));
  return (
    <Layout>
      <Header />
      {isLoading ? (
        <LoadingSpinner width={40} height={40} $borderWidth={3} />
      ) : (
        item && <Content {...item} />
      )}
    </Layout>
  );
};

export default ReservationPage;

const Layout = styled(PageLayout)`
  justify-content: flex-start;
`;
