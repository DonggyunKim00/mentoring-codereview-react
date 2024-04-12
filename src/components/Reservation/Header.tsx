import StyledButton from '@components/common/styled/StyledButton';
import StyledSpan from '@components/common/styled/StyledSpan';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <StyledButton
        width={50}
        height={64}
        onClick={() => {
          navigate(-1);
        }}
        bgcolor="#FFF"
      >
        <img src="/Back.svg" />
      </StyledButton>
      <StyledSpan fontSize={20} fontWeight={600} lineheight={26} color="#1A1A1A" text="예매하기" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;
