import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import AppWrapper from '@components/common/styled/AppWrapper';
import WishListProvider from './store/wishList';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <WishListProvider>
      <AppWrapper>
        <Router />
      </AppWrapper>
    </WishListProvider>
  </React.StrictMode>,
);

reportWebVitals();
