import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/theme';

const SidebarStyled = styled.div`
  min-height: 100vh;
  border-right: 1px solid ${colors.gray200};
  background-color: ${colors.white};
`;

export type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className }: SidebarProps) => (
  <SidebarStyled className={className}>
    Sidebar
  </SidebarStyled>
)

export default Sidebar;
