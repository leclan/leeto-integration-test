import React from 'react';
import styled from 'styled-components';
import { remCalc, Spaces, globalStyle, getMediaQuery } from '../../theme/theme';

import { Card, Icon, Row, Typography, Tag } from 'antd';
import Col from '../../components/Grid/Col';

const { Text } = Typography;

const SuvbentionPicture = styled(Col)`
  width: ${remCalc(128)};
  height: ${remCalc(128)};
  margin-right: ${Spaces.medium};
  border-radius: ${globalStyle.radiusSmall};
`

const SubventionExtras = styled.div`
  
  >*, .ant-tag {
    display: inline-block;
    margin-bottom: ${Spaces.small};

    ${getMediaQuery('medium')} {
      margin-bottom: ${Spaces.medium};
    }
  }

  >*:not(:last-child) {
    margin-right: ${remCalc(18)};
  }
`

const SubventionExtra = styled.div`
  >*:not(:last-child) {
    margin-right: ${Spaces.tiny};
  }
`

type CardSubventionProps = {
  className?: string;
  desc: string;
  img: string;
};

const CardSubvention = ({ className, desc, img }: CardSubventionProps) => (
  <Card className={className}>
    <Row type="flex">
      <SuvbentionPicture span="shrink">
        <img src={img} alt="subvention title" />
      </SuvbentionPicture>
      <Col span="auto">
        <SubventionExtras>
          <Tag color="magenta">subvention</Tag>
          <SubventionExtra>
            <Icon type="calendar" theme="twoTone" twoToneColor="#FFD666" />
            <Text type="secondary">Inscriptions : 01/01/2019 - 27/12/2019</Text>
          </SubventionExtra>
          <SubventionExtra>
            <Icon type="clock-circle" theme="twoTone" twoToneColor="#079CEE" />
            <Text type="secondary">165 jours restants avant la fermeture</Text>
          </SubventionExtra>
        </SubventionExtras>

        <Text>{desc}</Text>
      </Col>
    </Row>
  </Card>
)

export default CardSubvention;
