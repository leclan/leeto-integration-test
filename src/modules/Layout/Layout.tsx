import React from 'react';
import styled from 'styled-components';
import { colors, remCalc } from '../../theme/theme';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: ${remCalc(256)} auto; 
  grid-template-rows: ${remCalc(64)} auto;
  grid-template-areas: 'Sidebar Header' 'Sidebar Content';
`;

const SidebarItem = styled(Sidebar)`
 grid-area: Sidebar;
`

const HeaderItem = styled(Header)`
 grid-area: Header;
`

const Content = styled.div`
  grid-area: Content;
  background-color: ${colors.gray100};
`

const Layout = () => (
  <LayoutGrid>
    <HeaderItem />
    <SidebarItem />
    <Content>Hello</Content>
  </LayoutGrid>
);

export default Layout;
