import React from 'react';
import Layout from '../modules/Layout/Layout';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CommentBlock from '../modules/CommentBlock/CommentBlock';
import CardDetail from '../components/CardDetail/CardDetail';


const Subvention = () => (
  <Layout>
    <Breadcrumb></Breadcrumb>
    <CardDetail icon="home" colorIcon="#0050B3" data="150€" legend="Par foyer" />
    <CommentBlock></CommentBlock>
  </Layout>
)

export default Subvention;
