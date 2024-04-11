import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useExhibitionItem } from '@hooks/useExhibition';
import PageLayout from '@components/common/styled/PageLayout';

const ReservationPage = () => {
  const [param] = useSearchParams();
  const id = param.get('id');

  const { item, isLoading } = useExhibitionItem(Number(id));
  console.log(isLoading);
  console.log(item);
  return <PageLayout>예약페이지예약페이지</PageLayout>;
};

export default ReservationPage;
