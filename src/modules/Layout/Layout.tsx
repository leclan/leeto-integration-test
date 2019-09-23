import React from 'react';
import styled from 'styled-components';
import { colors, remCalc, Spaces, getMediaQuery } from '../../theme/theme';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

const LayoutGrid = styled.div`
  display: grid;
  grid-template-rows: ${remCalc(64)} auto;
  grid-template-areas: 'Header' 'Content';

  ${getMediaQuery('medium')} {
    grid-template-columns: ${remCalc(256)} auto; 
    grid-template-rows: ${remCalc(64)} auto;
    grid-template-areas: 'Sidebar Header' 'Sidebar Content';
  }
`;

const SidebarItem = styled(Sidebar)`
 grid-area: Sidebar;

 ${getMediaQuery("smallOnly")} {
   display: none;
 }
`

const HeaderItem = styled(Header)`
 grid-area: Header;
`

const Content = styled.div`
  grid-area: Content;
  padding-top: ${Spaces.large};
  padding-bottom: ${Spaces.large};
  background-color: ${colors.gray100};
`

type LayoutProps = {
  children?: React.ReactNode
};

const Layout = ({ children }: LayoutProps) => (
  <LayoutGrid>
    <HeaderItem />
    <SidebarItem />
    <Content>
      <Container>
        {children}
      </Container>
    </Content>
  </LayoutGrid>
);

export default Layout;
