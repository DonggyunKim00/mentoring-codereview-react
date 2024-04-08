import React from 'react';
import StyledButton from '@components/common/styled/StyledButton';

const WishBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledButton width={18} height={18} bgcolor={'transparent'} onClick={onClick}>
      <img src={'/Star.svg'} />
    </StyledButton>
  );
};

export default WishBtn;
