import React from 'react';
import Footer from '@components/common/Footer';
import ExhibitionList from '@components/common/Exhibition/ExhibitionList';
import { useExhibitionList } from '@hooks/useExhibition';
import LoadingSpinner from '@components/common/LoadingSpinner';
import None from './None';
import { PageLayout } from '@components/common/styled/PageLayout';
import useWishListStore from '@src/store/wishList';

const WishListPage = () => {
  const { list, isLoading } = useExhibitionList();
  const { wishList } = useWishListStore();

  return (
    <PageLayout>
      {isLoading ? (
        <LoadingSpinner width={40} height={40} $borderWidth={3} />
      ) : wishList.length ? (
        <ExhibitionList
          list={list.filter((item) => wishList.find((wishItemId) => wishItemId === item.id))}
        />
      ) : (
        <None />
      )}
      <Footer />
    </PageLayout>
  );
};

export default WishListPage;
