import StyledSpan from '@components/common/styled/StyledSpan';
import React from 'react';
import { styled } from 'styled-components';

const None = () => {
  return (
    <Container>
      <StyledSpan
        color="#1A1A1A"
        fontSize={16}
        fontWeight={400}
        lineheight={19.2}
        text={'찜해놓은 전시회가 없습니다'}
      />
      <StyledSpan
        color="#AAAAAA"
        fontSize={16}
        fontWeight={400}
        lineheight={19.2}
        text={'맘에 드는 전시회가 있다면 찜해보세요'}
      />
    </Container>
  );
};

export default None;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
