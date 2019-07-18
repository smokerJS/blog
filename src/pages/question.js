import React from 'react';
import SEO from '@components/seo';
import MailForm from '@components/mailForm';

const QuestionPage = () => (
  <React.Fragment>
    <SEO title="문의메일" keywords={['문의하기', '문의메일', 'smokerjs.dev@gmail.com', '후론투엔두 문의하기']} />
    <MailForm />
  </React.Fragment>
);

export default QuestionPage;
