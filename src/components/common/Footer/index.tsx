import React from 'react';
import { styled } from 'styled-components';
import StyledSpan from '../styled/StyledSpan';
import StyledLink from '../styled/StyledLink';

const Footer = () => {
  return (
    <Container>
      <StyledLink width={32} height={36} bgcolor={'transparent'} href={'/'}>
        <ButtonInner>
          <img src="/Ticket.svg" width={18} height={18} />
          <StyledSpan
            color={window.location.pathname === '/' ? '#1a1a1a' : '#AAAAAA'}
            fontSize={12}
            fontWeight={400}
            lineheight={14.4}
            text={'전시회'}
          />
        </ButtonInner>
      </StyledLink>
      <StyledLink width={32} height={36} bgcolor={'transparent'} href={'/wishlist'}>
        <ButtonInner>
          <img src="/FillStar.svg" width={18} height={18} />
          <StyledSpan
            color={window.location.pathname === '/wishlist' ? '#1a1a1a' : '#AAAAAA'}
            fontSize={12}
            fontWeight={400}
            lineheight={14.4}
            text={'찜목록'}
          />
        </ButtonInner>
      </StyledLink>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 80px;
  border-top: 1px solid #ededed;
  a {
    width: 50%;
    height: 100%;
    cursor: pointer;
  }
`;
const ButtonInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;
