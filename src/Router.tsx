import React from 'react';
import { Home } from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

function Router() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default Router;

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
