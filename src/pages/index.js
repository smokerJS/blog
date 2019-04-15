import React from "react";
import SEO from "@components/seo";
import IndexContents from "@components/indexContents";

const IndexPage = () => (
  <React.Fragment>
    <SEO title="후론투엔두" keywords={[`gatsby`, `application`, `react`]} />
    <IndexContents/>
  </React.Fragment>
)

export default IndexPage;