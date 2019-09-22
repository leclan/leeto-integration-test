import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { colors, transition, Spaces, remCalc } from '../../theme/theme';

const BreadcrumbStyled = styled.div`
  color: ${colors.gray400};
`;

const BreadcrumbItem = styled.a`
  display: block;
  color: ${colors.gray400};
  transition: ${transition.global};

  &:hover {
    color: ${colors.black};
  }
`

const BreadcrumbItemIcon = styled(Icon)`
  margin-right: ${Spaces.small};
  font-size: ${remCalc(18)};
  
  &.anticon {
    vertical-align: middle;
  }
`


export type BreadcrumbProps = {
  className?: string;
};

const Breadcrumb = ({ className }: BreadcrumbProps) => (
  <BreadcrumbStyled className={className}>
    <BreadcrumbItem href="">
      <BreadcrumbItemIcon type="left" />
      <span>Advantages</span>
    </BreadcrumbItem>
  </BreadcrumbStyled>
)

export default Breadcrumb;
