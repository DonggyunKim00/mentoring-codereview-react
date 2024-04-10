import React from 'react';
import StyledButton from '@components/common/styled/StyledButton';
import { useIsWish } from '@hooks/useWishList';
import { useWishItemToggle } from '@hooks/useWishList';

const WishBtn = ({ itemId }: { itemId: number }) => {
  const { isWish } = useIsWish(itemId);
  const { toggleFn } = useWishItemToggle();
  return (
    <StyledButton width={18} height={18} bgcolor={'transparent'} onClick={() => toggleFn(itemId)}>
      {isWish ? <img src={'/FillStar.svg'} /> : <img src={'/Star.svg'} />}
    </StyledButton>
  );
};

export default WishBtn;
