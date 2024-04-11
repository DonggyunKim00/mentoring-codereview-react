import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import { WishList } from '@pages/WishList';
import { NotFound } from '@pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
