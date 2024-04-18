import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import AppWrapper from '@components/common/styled/AppWrapper';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppWrapper>
      <div id="portal"></div>
      <Router />
    </AppWrapper>
  </React.StrictMode>,
);

reportWebVitals();
