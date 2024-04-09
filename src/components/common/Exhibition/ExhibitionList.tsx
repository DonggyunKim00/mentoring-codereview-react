import { ExhibitionItemType } from 'types/exhibition';
import React from 'react';
import { styled } from 'styled-components';
import ExhibitionItem from './ExhibitionItem';

const ExhibitionList = ({ list }: { list: ExhibitionItemType[] }) => {
  return (
    <Container>
      {list.map((item) => {
        return <ExhibitionItem key={item.id} {...item} />;
      })}
    </Container>
  );
};

export default ExhibitionList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  max-height: 764px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
