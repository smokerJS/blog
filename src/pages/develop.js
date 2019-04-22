import React from "react";
import SEO from "@components/seo";
import { graphql, Link } from "gatsby";

const DevelopPage = ({data}) => (
  <React.Fragment>
    <SEO title="후론투엔두" keywords={[`gatsby`, `application`, `react`]} />
    <section className="post-area develop-main">
      <ul className="post-list">
        {data.allMarkdownRemark.edges.map((obj,key)=>{
          const item = obj.node.frontmatter;
          return (
            <li key={`post_${item.path}_${key}`}>
              <b>
                <Link className="post-title" to={item.path}>
                  {item.title}
                </Link>
              </b>
              <div className="post-info-group">
                {[...item.tags].map((obj,key)=>{
                  return (
                    obj && <span className="hashtag" key={`tag_${item.path}_${key}`}>{obj}</span>
                    )
                  })}
                <strong className="date-info">{item.date}</strong>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  </React.Fragment>
)
export default DevelopPage;
export const pageQuery = graphql`
query DevelopPageQuery {
  allMarkdownRemark(limit: 1000, filter:{frontmatter:{category:{eq: "develop"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        excerpt(pruneLength: 250)
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
`