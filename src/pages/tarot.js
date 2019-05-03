import React from 'react';
import SEO from '@components/seo';
import TarotContents from '@components/tarotContents';

const TaortPage = () => (
  <React.Fragment>
    <SEO title="후론투엔두" keywords={['gatsby', 'application', 'react']} />
    <TarotContents />
  </React.Fragment>
);

export default TaortPage;
