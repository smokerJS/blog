import React from 'react';
import SEO from '@components/seo';
import IndexContents from '@components/indexContents';

const IndexPage = () => (
  <React.Fragment>
    <SEO title="후론투엔두" keywords={['smokerjs.dev@gmail.com', 'smokerJS', '블로그', '기술블로그', '남타', '남타블로그']} />
    <IndexContents />
    <script>
        {`
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-1540853335472527",
            enable_page_level_ads: true
          });
        `}
    </script>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  </React.Fragment>
);

export default IndexPage;
