import React from "react";
import SEO from "@components/seo";
import Search from "@components/modal/search";
import DevelopPostList from "@components/developPostList";
import { graphql, Link } from "gatsby";

class DevelopPage extends React.Component {
  state = {
    searchQuery: '',
    list: this.props.data.allMarkdownRemark.edges,
    totalCount: this.props.data.allMarkdownRemark.totalCount,
    searchResultText: '',
    alert: {
      show: false
    }
  }
  getSearchResults = (query) => {
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

  search = (query) => {
    if(!query){
      this.setState({
        list : this.props.data.allMarkdownRemark.edges,
        totalCount : this.props.data.allMarkdownRemark.totalCount,
        searchResultText: '',
        searchQuery: ''
      });
      return;
    }
    const list = this.getSearchResults(query);
    this.setState({
      list : list,
      searchQuery: query,
      totalCount: list.length,
      searchResultText: '검색 결과 '
    })
  }

  modalToggleHandler = () => {
    this.setState({
      alert: {
        show: !this.state.alert.show
      }
    })
  }

  render(){
    const data = this.props.data;
    return (
      <React.Fragment>
        <SEO title="후론투엔두" keywords={[`gatsby`, `application`, `react`]} />
        <section className="post-area develop-main">
          <div className="search-group">
            <div className="search-btn-group" onClick={()=>{this.modalToggleHandler()}}>
              <img src={require("@images/common/icon-search.png")}/>
              <span>검색</span>
            </div>
          </div>
          <div className="header-group">
            <h1>디베로먼투 모음집</h1>
            <span>{this.state.searchResultText} 모두 다 하여<strong>{this.state.totalCount}</strong>글귀</span>
          </div>
          <ul className="post-list">
            <DevelopPostList list={this.state.list} searchQuery={this.state.searchQuery}/>
          </ul>
        </section>
        <Search toggleFunction={this.modalToggleHandler} search={this.search} show={this.state.alert.show}/>
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