// import PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";

class PostDetailList extends React.Component {

  state = {
    list : this.props.list.filter(obj => obj.node.frontmatter.category === this.props.category)
  }

  page = () => {
    let propsList = this.props.list.filter(obj => obj.node.frontmatter.category === this.props.category);
    let tempList = [];
    let index = 0;
    let currPage = 0;
    const list = [];
    while(propsList.length) {
      if(index % 5 === 0) {
        list.push(tempList);
        tempList = [];
      }
      tempList.push(propsList.shift());
    }
  }

  getCategoryName = () => {
    let result = ''
    switch (this.props.category) {
      case 'develop' : result = '디베로먼투'; break;
      case 'tarot' : result = '타로'; break;
      case 'life' : result = '라이푸'; break;
      default: result = '후론투엔두'; break;
    }
    return result;
  }

  render(){
    return (
      <article>
        <h3>{this.getCategoryName()} 모음집의 다른 글귀</h3>
        <ul>
        {
          this.state.list.map((obj,key)=>{
            const item = obj.node.frontmatter;
            return (
              <li key={key}>
                <Link to={item.path}>
                  <strong>{item.title}</strong>
                  <span>{item.date}</span>
                </Link>
              </li>
            )
          })
        }
        </ul>
      </article>
    )
  }
}
export default PostDetailList;