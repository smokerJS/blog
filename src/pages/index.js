import React from "react";
import { Link } from "gatsby";

import Layout from "@components/layout";
import Image from "@components/image";
import SEO from "@components/seo";
import IndexContents from "@components/indexContents";
import "@scss/main.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <IndexContents/>
  </Layout>
)

export default IndexPage