import React from "react";
import { graphql } from "gatsby";
import SEO from "@components/seo";
import PostDetailList from "@components/postDetailList";
import { DiscussionEmbed } from "disqus-react";
import Prism from "prismjs";
import "@scss/github-markdown.css"
import "@scss/prism.css"

class Template extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const data = this.props.data;
    const post = data.markdownRemark;
    const disqusShortname = "smokerjs";
    const disqusConfig = {
      identifier: `smokerjs.com/${post.frontmatter.path}`,
      title: post.frontmatter.title,
    };
    return (

      <React.Fragment>
        <SEO title={post.frontmatter.title} keywords={[`gatsby`, `application`, `react`]} />
        <div className="background-black"></div>
        <section className="post-area">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <hr className="post-hr"/>
          <b className="post-date">{post.frontmatter.date}</b>
          <div className="post-content markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          <PostDetailList category={post.frontmatter.category} list={data.allMarkdownRemark.edges}/>
        </section>
      </React.Fragment>
    );
  }
}
export default Template;
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            category
            date
            path
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        category
      }
    }
  }
`;