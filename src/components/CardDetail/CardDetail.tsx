import React from 'react';
import styled from 'styled-components';
import { remCalc, Spaces, colors } from '../../theme/theme';
import { transparentize } from 'polished';

import { Card, Icon, Row, Typography } from 'antd';

const { Title } = Typography;

type StyledIconProps = { colorIcon?: string };

const ColumnRight = styled.div`
  flex: 1 1 0px;
  width: auto;
`

const CardStyled = styled(Card)`
  .ant-card-body {
    padding-right: ${remCalc(14)};
    padding-left: ${remCalc(14)};
  }
  
`

const IconWrapper = styled.div<StyledIconProps>`
  flex: 0 0 auto;
  width: ${remCalc(36)};
  height: ${remCalc(36)};
  border-radius: 12px;
  margin-right: ${Spaces.default};
  background-color: ${props => transparentize(.8, props.colorIcon ? props.colorIcon : colors.gray300)};
  color: ${(props => props.colorIcon ?  props.colorIcon : colors.gray400)};
  font-size: ${remCalc(16)};
  text-align: center;
  line-height: ${remCalc(35)};
`

const TitleStyled = styled(Title)`
  &.ant-typography {
    margin-bottom: 0;
  }
`

type CardDetailProps = {
  className?: string;
  icon: string;
  data: string;
  legend: string;
  colorIcon?: string;
};

const CardDetail = ({ className, data, legend, icon, colorIcon }: CardDetailProps) => (
  <CardStyled className={className}>
    <Row type="flex">
      <IconWrapper colorIcon={colorIcon}>
        <Icon type={icon} />
      </IconWrapper>
      <ColumnRight>
        <TitleStyled level={3}>
          {data}
        </TitleStyled>
        <span>{legend}</span>
      </ColumnRight>
    </Row>
  </CardStyled>
)

export default CardDetail;
