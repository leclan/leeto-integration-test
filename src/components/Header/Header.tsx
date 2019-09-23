import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/theme';

const HeaderStyled = styled.div`
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray200};
`;

export type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => (
  <HeaderStyled className={className}>
    Header
  </HeaderStyled>
)

export default Header;
