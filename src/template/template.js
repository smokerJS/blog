import React from "react";
import { graphql } from "gatsby";
import SEO from "@components/seo";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <React.Fragment>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="container">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <span className="has-text-grey-light is-size-6">{post.frontmatter.date}</span>
      </div>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;