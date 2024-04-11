import React from 'react';
import { styled } from 'styled-components';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default PageLayout;

const Layout = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;
