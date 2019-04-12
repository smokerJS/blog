import React from "react";

import Layout from "@components/layout";
import SEO from "@components/seo";
import MailForm from "@components/mailForm";

const QuestionPage = () => (
  <Layout menu={false} focusTab="qusetion">
    <SEO title="문의메일" keywords={[`gatsby`, `application`, `react`]} />
    <MailForm/>
  </Layout>
)

export default QuestionPage;