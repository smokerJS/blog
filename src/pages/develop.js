import React from "react";
import SEO from "@components/seo";
import DevelopPostList from "@components/developPostList";
import { graphql, Link } from "gatsby";

class DevelopPage extends React.Component {
  state = {
    query: '',
    searchQuery: '',
    list: this.props.data.allMarkdownRemark.edges
  }
  getSearchResults = () => {
    const query = this.state.query;
    function search(obj,word) {
      if(obj.indexOf(word) !== -1) return true;
      return false;
    }
    return this.props.data.allMarkdownRemark.edges.filter((obj,key)=>{
      const item = obj.node.frontmatter
      if(search(item.title,query)) return true;
      if(search(`${item.tags}`,query)) return true;
      if(search(obj.node.excerpt,query)) return true;
    })
  }

  search = () => {
    if(!this.state.query){
      this.setState({
        list : this.props.data.allMarkdownRemark.edges
      });
      return;
    }
    this.setState({ list : this.getSearchResults(), searchQuery: this.state.query })
  }

  onChangeQueryHandler = (e) => {
    this.setState({
      query : e.target.value
    })
  }

  render(){
    const data = this.props.data;
    return (
      <React.Fragment>
        <SEO title="후론투엔두" keywords={[`gatsby`, `application`, `react`]} />
        <section className="post-area develop-main">
          <div className="header-group">
          <input type="text" value={this.state.query} onChange={(e)=>{this.onChangeQueryHandler(e)}} placeholder={'Search'} />
            <h1>디베로먼투 모음집<i onClick={()=>{this.search()}}>검색</i></h1>
            <span>모두 다 하여<strong>{data.allMarkdownRemark.totalCount}</strong>글귀</span>
          </div>
          <ul className="post-list">
            <DevelopPostList list={this.state.list} searchQuery={this.state.searchQuery}/>
          </ul>
        </section>
      </React.Fragment>
    )
  }
}
export default DevelopPage;
export const pageQuery = graphql`
query DevelopPageQuery {
  allMarkdownRemark(limit: 1000, filter:{frontmatter:{category:{eq: "develop"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
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
`