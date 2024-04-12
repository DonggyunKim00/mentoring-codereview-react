import { ExhibitionItemType } from 'types/exhibition';
import React from 'react';
import { styled } from 'styled-components';
import StyledTitle from '@components/common/styled/StyledTitle';
import StyledSpan from '@components/common/styled/StyledSpan';
import WishBtn from '@components/common/Buttons/WishBtn';
import StyledButton from '@components/common/styled/StyledButton';

const Content = ({ ...props }: ExhibitionItemType) => {
  const { id, title, imageUrl, place, price, date } = props;

  return (
    <Container>
      <Image src={imageUrl} />
      <InnerContent>
        <StyledTitle
          fontSize={32}
          lineheight={38.4}
          fontWeight={600}
          color="#1A1A1A"
          text={title}
        />
        <StyledSpan
          color="#ff4800"
          fontSize={24}
          fontWeight={600}
          lineheight={28.8}
          text={price.toString()}
        />
        <Bottom>
          <LeftInfo>
            <StyledSpan
              color="#1A1A1A"
              fontSize={16}
              fontWeight={600}
              lineheight={19.2}
              text={place}
            />
            <StyledSpan
              color="#1A1A1A"
              fontSize={16}
              fontWeight={600}
              lineheight={19.2}
              text={[date.started, date.ended].join(' ~ ')}
            />
          </LeftInfo>
          <WishBtn itemId={id} width={32} height={32} />
        </Bottom>
        <StyledButton width={366} height={59} bgcolor={'#FFBF66'} onClick={() => {}}>
          <StyledSpan
            color="#FFF"
            fontSize={24}
            fontWeight={600}
            lineheight={28.8}
            text={'예매하기'}
          />
        </StyledButton>
      </InnerContent>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 390px;
  height: 390px;
`;
const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 12px 0px 12px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
