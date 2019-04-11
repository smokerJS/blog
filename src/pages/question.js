import React from "react";
import { Link } from "gatsby";

import Layout from "@components/layout";
import Image from "@components/image";
import SEO from "@components/seo";

import "@scss/main.scss";

const QuestionPage = () => (
  <Layout menu={true}>
    <SEO title="문의메일" keywords={[`gatsby`, `application`, `react`]} />
    문의메일보내라
  </Layout>
)

export default QuestionPage;