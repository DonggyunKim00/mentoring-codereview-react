import StyledButton from '@components/common/styled/StyledButton';
import StyledSpan from '@components/common/styled/StyledSpan';
import useModalStateStore from '@src/store/modalState';
import useReserveStore from '@src/store/reserve';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextArea } from './SelectModal';

const SuccessModal = () => {
  const navigate = useNavigate();
  const { close } = useModalStateStore();
  const { init } = useReserveStore();

  return (
    <Container>
      <TextArea>
        <StyledSpan
          fontSize={16}
          fontWeight={500}
          lineheight={24}
          color="#1A1A1A"
          text="예매가 완료되었습니다"
        />
      </TextArea>
      <StyledButton
        width={250}
        height={34}
        bgcolor={'#FFBF66'}
        onClick={() => {
          navigate('/');
          init();
          close();
        }}
      >
        <StyledSpan color="#FFF" fontSize={16} fontWeight={500} lineheight={19.2} text={'확인'} />
      </StyledButton>
    </Container>
  );
};

export default SuccessModal;
