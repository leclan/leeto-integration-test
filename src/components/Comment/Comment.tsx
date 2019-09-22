import React from 'react';
import styled from 'styled-components';
import { remCalc, Spaces } from '../../theme/theme';

import avatarUser from '../../assets/images/avatar.png';
import { Input, Button, Form, Row } from 'antd';

const { TextArea } = Input;

const CommentAvatar = styled.div`
  flex: 0 0 auto;
  width: ${remCalc(32)};
  height: ${remCalc(32)};
  margin-right: ${Spaces.default};
  border-radius: 100%;
`

const CommentRight = styled.div`
  flex: 1 1 0px;
  width: auto;
`

export type CommentProps = {
  className?: string;
};

const Comment = ({ className }: CommentProps) => (
  <Row type="flex" className={className}>
    <CommentAvatar>
      <img src={avatarUser} alt="john doe avatar" />
    </CommentAvatar>
    <CommentRight>
      <Form>
        <Form.Item>
          <TextArea rows={4} placeholder="Votre commentaire" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" >Envoyer</Button>
        </Form.Item>
      </Form>
    </CommentRight>
  </Row>
)

export default Comment;
