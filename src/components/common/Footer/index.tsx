import React from 'react';
import { styled } from 'styled-components';
import StyledButton from '@components/common/styled/StyledButton';
import StyledSpan from '../styled/StyledSpan';

const Footer = () => {
  return (
    <Container>
      <StyledButton width={32} height={36} bgcolor={'transparent'} onClick={() => {}}>
        <ButtonInner>
          <img src="/Ticket.svg" width={18} height={18} />
          <StyledSpan
            color="#1a1a1a"
            fontSize={12}
            fontWeight={400}
            lineheight={14.4}
            text={'전시회'}
          />
        </ButtonInner>
      </StyledButton>
      <StyledButton width={32} height={36} bgcolor={'transparent'} onClick={() => {}}>
        <ButtonInner>
          <img src="/FillStar.svg" width={18} height={18} />
          <StyledSpan
            color="#AAAAAA"
            fontSize={12}
            fontWeight={400}
            lineheight={14.4}
            text={'찜목록'}
          />
        </ButtonInner>
      </StyledButton>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-top: 1px solid #ededed;
  button {
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
