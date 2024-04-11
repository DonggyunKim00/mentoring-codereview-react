import React, { useContext } from 'react';
import Footer from '@components/common/Footer';
import ExhibitionList from '@components/common/Exhibition/ExhibitionList';
import { WishListContext } from '@src/store/wishList';
import { useExhibitionList } from '@hooks/useExhibition';
import LoadingSpinner from '@components/common/LoadingSpinner';
import None from './None';
import { PageLayout } from '@components/common/styled/PageLayout';

const WishListPage = () => {
  const { list, isLoading } = useExhibitionList();
  const { wishList } = useContext(WishListContext);

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
