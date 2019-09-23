import React from 'react';
import styled from 'styled-components';
import { Spaces } from '../../theme/theme';

const ListCardDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(176px , 1fr));
  grid-gap: ${Spaces.medium};
  margin-top: ${Spaces.medium};
  margin-bottom: ${Spaces.large};
`;

type ListCardDetailProps = {
  children?: React.ReactNode
};

const ListCardDetail = ({ children }: ListCardDetailProps) => (
  <ListCardDetailGrid>
    {children}
  </ListCardDetailGrid>
)


export default ListCardDetail;
