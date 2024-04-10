import React from 'react';
import { styled } from 'styled-components';
import ReservationBtn from '@components/common/Buttons/ReservationBtn';
import WishBtn from '@components/common/Buttons/WishBtn';
import StyledSpan from '@components/common/styled/StyledSpan';
import StyledTitle from '@components/common/styled/StyledTitle';
import { ExhibitionItemType } from 'types/exhibition';

const ExhibitionItem = ({ ...props }: ExhibitionItemType) => {
  const { id, title, imageUrl, place, price, date } = props;

  return (
    <Container>
      <ItemImage src={imageUrl} />
      <Info>
        <InfoTop>
          <InfoHeader>
            <StyledTitle
              color="#1A1A1A"
              fontSize={16}
              fontWeight={700}
              lineheight={19.2}
              text={title}
            />
            <WishBtn itemId={id} />
          </InfoHeader>
          <StyledSpan
            color="#999999"
            fontSize={12}
            fontWeight={400}
            lineheight={19.2}
            text={place}
          />
          <StyledSpan
            color="#ff4800"
            fontSize={12}
            fontWeight={400}
            lineheight={19.2}
            text={price.toString()}
          />
        </InfoTop>
        <InfoBottom>
          <StyledSpan
            color="#1a1a1a"
            fontSize={8}
            fontWeight={400}
            lineheight={9.6}
            text={[date.started, date.ended].join(' ~ ')}
          />
          <ReservationBtn onClick={() => {}} />
        </InfoBottom>
      </Info>
    </Container>
  );
};

export default ExhibitionItem;

const Container = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 286px;
`;
const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
`;
const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemImage = styled.img`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: black;
`;
