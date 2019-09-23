import React from 'react';
import styled from 'styled-components';
import Comment from '../../components/Comment/Comment';
import { Typography } from 'antd';
import { Spaces, remCalc } from '../../theme/theme';

const { Title } = Typography;

const TitleStyled = styled(Title)`
  &.ant-typography {
    font-size: ${remCalc(16)};
    margin-bottom: ${Spaces.medium};
  }
`

const CommentBlock = () => (
  <div>
    <TitleStyled level={4}>Commentaires</TitleStyled>
    <Comment/>
  </div>
);

export default CommentBlock;
