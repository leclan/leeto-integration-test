import React from 'react';
import Layout from '../modules/Layout/Layout';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CardDetail from '../components/CardDetail/CardDetail';
import CommentBlock from '../modules/CommentBlock/CommentBlock';
import SubventionHead from '../modules/SubventionHead/SubventionHead';
import ListCardDetail from '../modules/ListCardDetail/ListCardDetail';
import CardSubvention from '../components/CardSubvention/CardSubvention';

import subventionSportPicture from '../assets/images/subvention.jpg';


const Subvention = () => (
  <Layout>
    <Breadcrumb></Breadcrumb>
    <SubventionHead />
    <CardSubvention 
      img={subventionSportPicture}
      desc="Remboursement des activités sportives des salariés à hauteur de 150€ sur présentation de factures nominatives de licence sportive, d’adhésion à un club de sport ou d'achat de billetterie pour des événements sportifs."
    />
    <ListCardDetail>
      <CardDetail icon="home" colorIcon="#0050B3" data="150€" legend="Par foyer" />
      <CardDetail icon="heart" colorIcon="#F5222D" data="100€" legend="Par conjoint" />
      <CardDetail icon="user-add" colorIcon="#EB2F96" data="100€" legend="par enfant" />
      <CardDetail icon="team" colorIcon="#722ED1" data="100€" legend="participants" />
      <CardDetail icon="euro" colorIcon="#FA8C16" data="16 124€" legend="consommé" />
    </ListCardDetail>
    <CommentBlock></CommentBlock>
  </Layout>
)

export default Subvention;
