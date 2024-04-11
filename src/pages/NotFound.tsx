import StyledSpan from '@components/common/styled/StyledSpan';
import React from 'react';
import { styled } from 'styled-components';

export const NotFound = () => {
  return (
    <Layout>
      <StyledSpan fontSize={60} fontWeight={600} lineheight={60} color="#FFF" text="404" />
      <StyledSpan
        fontSize={30}
        fontWeight={600}
        lineheight={28.8}
        color="#FFF"
        text="찾을 수 없는 컨텐츠 입니다."
      />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 390px;
  height: 100vh;
  background-color: black;
`;
