import React from 'react';
import SEO from '@components/seo';
import TarotContents from '@components/tarotContents';

const TaortPage = () => (
  <React.Fragment>
    <SEO title="타로" keywords={['남타', '남자가 말해주는 타로', '남타유튜브', '후론투엔두 타로']} />
    <TarotContents />
  </React.Fragment>
);

export default TaortPage;
