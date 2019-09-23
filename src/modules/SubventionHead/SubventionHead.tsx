import React from 'react';
import { Typography, Button, Row } from 'antd';
import Col from '../../components/Grid/Col';

const { Title } = Typography;

type SubventionHeadProps = {
  title: string
};

const SubventionHead = ({ title }: SubventionHeadProps) => (
  <Row type="flex">
    <Col span="auto">
      <Title level={2}>{title}</Title>
    </Col>
    <Col span="shrink">
      <Button icon="edit" type="primary">Editer</Button>
    </Col>
  </Row>
);

export default SubventionHead;
