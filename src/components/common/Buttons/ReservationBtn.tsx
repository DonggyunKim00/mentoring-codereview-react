import React from 'react';
import StyledButton from '@components/common/styled/StyledButton';
import StyledSpan from '../styled/StyledSpan';

const ReservationBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledButton width={40} height={16} bgcolor={'black'} onClick={onClick}>
      <StyledSpan color="white" fontSize={8} fontWeight={400} lineheight={9.6} text={'예매하기'} />
    </StyledButton>
  );
};

export default ReservationBtn;
