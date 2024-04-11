import React from 'react';
import StyledSpan from '../styled/StyledSpan';
import StyledLink from '../styled/StyledLink';

const ReservationRouteBtn = ({ itemId }: { itemId: number }) => {
  return (
    <StyledLink width={40} height={16} bgcolor={'black'} href={`/reservation?id=${itemId}`}>
      <StyledSpan color="white" fontSize={8} fontWeight={400} lineheight={9.6} text={'예매하기'} />
    </StyledLink>
  );
};

export default ReservationRouteBtn;
