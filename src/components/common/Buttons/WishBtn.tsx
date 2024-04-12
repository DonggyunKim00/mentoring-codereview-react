import React from 'react';
import StyledButton from '@components/common/styled/StyledButton';
import { useIsWish } from '@hooks/useWishList';
import { useWishItemToggle } from '@hooks/useWishList';

interface Props {
  itemId: number;
  width: number;
  height: number;
}
const WishBtn = ({ ...props }: Props) => {
  const { itemId, width, height } = props;
  const { isWish } = useIsWish(props.itemId);
  const { toggleFn } = useWishItemToggle();
  return (
    <StyledButton
      width={width}
      height={height}
      bgcolor={'transparent'}
      onClick={() => toggleFn(itemId)}
    >
      {isWish ? (
        <img src={'/FillStar.svg'} width={width} height={height} />
      ) : (
        <img src={'/Star.svg'} width={width} height={height} />
      )}
    </StyledButton>
  );
};

export default WishBtn;
