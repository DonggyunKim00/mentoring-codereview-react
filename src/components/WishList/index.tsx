import React from 'react';
import { Container } from '@components/Home';
import Footer from '@components/common/Footer';
import ExhibitionList from '@components/common/Exhibition/ExhibitionList';

const WishListPage = () => {
  return (
    <Container>
      <ExhibitionList list={[]} />
      <Footer />
    </Container>
  );
};

export default WishListPage;
