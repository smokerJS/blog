import React from 'react';
import SEO from '@components/seo';
import List from '@base/list';
import { graphql } from 'gatsby';

const DevelopPage = ({ data }) => (
  <React.Fragment>
    <SEO title="디베로먼투" keywords={['develop', '디베로먼투', 'javascript', 'react', 'es6', '개발블로그', '개발', '기술', '기술블로그']} />
    <List data={data} category="develop" />
  </React.Fragment>
);
export default DevelopPage;
export const pageQuery = graphql`
  query DevelopPageQuery {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { category: { eq: "develop" } } }
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
