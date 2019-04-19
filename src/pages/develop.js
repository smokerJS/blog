import React from "react";
import SEO from "@components/seo";
import { graphql } from "gatsby";

const DevelopPage = ({data}) => (
  <React.Fragment>
        <SEO title="후론투엔두" keywords={[`gatsby`, `application`, `react`]} />
    <div>{data.allMarkdownRemark.edges.map((obj,key)=>{
      return (
        <span>{obj.node.frontmatter.title}</span>
      )
    })}</div>
  </React.Fragment>
)
export default DevelopPage;
export const pageQuery = graphql`
query DevelopPageQuery {
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
}
`