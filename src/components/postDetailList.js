// import PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";

class PostDetailList extends React.Component {

  state = {
    list : this.props.list,
    currList : this.props.list.filter(obj => obj.node.frontmatter.category === this.props.category),
    currPage : 0,
    prevPage : false,
    nextPage : false
  }

  componentDidMount() {
    let propsList = this.state.currList;
    let tempList = [];
    let index = 0;
    let currPage = 0;
    const list = [];
    let pathname = window.location.pathname
    pathname[pathname.length - 1] === '/' && (pathname = pathname.slice(0,pathname.length - 1));
    while(propsList.length) {
      propsList[0].node.frontmatter.path === pathname && (currPage = index);
      if(index && index % 5 === 0) {
        list.push(tempList);
        tempList = [];
      }
      tempList.push(propsList.shift());
      index++;
    }
    tempList.length && list.push(tempList);
    currPage = parseInt(currPage / 5);
    this.setState({
      list : list,
      currList : list[currPage],
      currPage : currPage,
      prevPage : !currPage,
      nextPage : !list[currPage + 1]
    })
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

  onPagemoveHandler = (pagemove) => {
    const currPage = this.state.currPage + pagemove;
    this.setState({
      currList : this.state.list[currPage],
      currPage : currPage,
      prevPage : !currPage,
      nextPage : !this.state.list[currPage + 1]
    })
  }

  render(){
    return (
      <article>
        <h3>{this.getCategoryName()} 모음집의 다른 글귀</h3>
        <ul>
        {
          this.state.currList.map((obj,key)=>{
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
        <button disabled={this.state.prevPage} onClick={()=>{this.onPagemoveHandler(-1)}}>왼쪽</button>
        <button disabled={this.state.nextPage} onClick={()=>{this.onPagemoveHandler(1)}}>오른쪽</button>
      </article>
    )
  }
}
export default PostDetailList;