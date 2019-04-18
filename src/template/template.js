import React from "react";
import { graphql } from "gatsby";
import SEO from "@components/seo";
import { DiscussionEmbed } from "disqus-react";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const disqusShortname = "smokerjs";
  const disqusConfig = {
    identifier: `smokerjs.com/${post.frontmatter.path}`,
    title: post.frontmatter.title,
  };
  return (
    <React.Fragment>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="background-black"></div>
      <section className="post-detail-area">
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <hr class="post-hr"/>
        <b className="post-date">{post.frontmatter.date}</b>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </section>
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
        path
      }
    }
  }
`;