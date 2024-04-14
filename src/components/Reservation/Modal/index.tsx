import StyledButton from '@components/common/styled/StyledButton';
import StyledSpan from '@components/common/styled/StyledSpan';
import React from 'react';
import { styled } from 'styled-components';

const Modal = () => {
  return (
    <Container>
      <TextArea>
        <StyledSpan
          fontSize={16}
          fontWeight={500}
          lineheight={24}
          color="#1A1A1A"
          text="티켓을 예매하시겠습니까?"
        />
        <StyledSpan
          fontSize={16}
          fontWeight={500}
          lineheight={24}
          color="#1A1A1A"
          text="예매 내역은 이메일로 전송됩니다"
        />
      </TextArea>
      <StyledButton width={250} height={34} bgcolor={'#FFBF66'} onClick={() => {}}>
        <StyledSpan color="#FFF" fontSize={16} fontWeight={500} lineheight={19.2} text={'확인'} />
      </StyledButton>
      <StyledButton width={250} height={34} bgcolor={'#999999'} onClick={() => {}}>
        <StyledSpan color="#FFF" fontSize={16} fontWeight={500} lineheight={19.2} text={'취소'} />
      </StyledButton>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`;
const TextArea = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
