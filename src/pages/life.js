import React from 'react';
import SEO from '@components/seo';
import List from '@base/list';
import { graphql } from 'gatsby';

const LifePage = ({ data }) => (
  <React.Fragment>
    <SEO title="라이푸" keywords={['life', '라이푸', 'smokerJS', '일기', '일상생활', '정보', '일상']} />
    <List data={data} category="life" />
  </React.Fragment>
);
export default LifePage;
export const pageQuery = graphql`
  query LifePageQuery {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { category: { eq: "life" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 999999999)
          id
          frontmatter {
            title
            category
            date
            path
            tags
          }
        }
      }
    }
  }
`;
