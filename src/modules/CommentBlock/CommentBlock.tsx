import React from 'react';
import Comment from '../../components/Comment/Comment';
import { Typography } from 'antd';

const { Title } = Typography;

const CommentBlock = () => (
  <div>
    <Title level={4}>Commentaires</Title>
    <Comment/>
  </div>
);

export default CommentBlock;
