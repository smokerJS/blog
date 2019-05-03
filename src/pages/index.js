import React from 'react';
import SEO from '@components/seo';
import IndexContents from '@components/indexContents';

const IndexPage = () => (
  <React.Fragment>
    <SEO title="후론투엔두" keywords={['smokerjs.dev@gmail.com', 'smokerJS', '블로그', '기술블로그', '남타', '남타블로그']} />
    <IndexContents />
  </React.Fragment>
);

export default IndexPage;
