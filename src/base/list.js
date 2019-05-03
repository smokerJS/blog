import React from 'react';
import Search from '@components/modal/search';
import PostList from '@components/list/postList';
import { connect } from 'react-redux';
import { toggleModalView } from '@state/app';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      list: this.props.data.allMarkdownRemark.edges,
      totalCount: this.props.data.allMarkdownRemark.totalCount,
    };
    this.props.dispatch(toggleModalView(false));
  }

  getSearchResults = (query) => {
    function search(obj, word) {
      if (obj.indexOf(word) !== -1) return true;
      return false;
    }
    return this.props.data.allMarkdownRemark.edges.filter((obj) => {
      const item = obj.node.frontmatter;
      if (search(item.title, query)) return true;
      if (search(`${item.tags}`, query)) return true;
      if (search(obj.node.excerpt, query)) return true;
    });
  }

  search = (query) => {
    if (!query) {
      this.setState({
        list: this.props.data.allMarkdownRemark.edges,
        totalCount: this.props.data.allMarkdownRemark.totalCount,
        searchQuery: '',
      });
      return;
    }
    const list = this.getSearchResults(query);
    this.setState({
      list,
      searchQuery: query,
      totalCount: list.length,
    });
  }

  modalToggleHandler = () => {
    this.props.dispatch(toggleModalView(!this.props.isModalView));
  }

  getCategoryName = () => {
    let result = '';
    switch (this.props.category) {
    case 'develop':
      result = '디베로먼투';
      break;
    case 'tarot':
      result = '타로';
      break;
    case 'life':
      result = '라이푸';
      break;
    default:
      result = '후론투엔두';
      break;
    }
    return result;
  }

  render() {
    return (
      <React.Fragment>
        <section className="post-area develop-main">
          <div className="search-group">
            <div
              className="search-btn-group"
              onClick={() => {
                this.modalToggleHandler();
              }}
            >
              <img src={require('@images/common/icon-search.png')} />
              <span>검색</span>
            </div>
          </div>
          <div className="header-group">
            <h1>{this.getCategoryName()} 모음집</h1>
            <span>
              {this.state.searchQuery && '검색 결과 '}
              모두 다 하여
              <strong>{this.state.totalCount}</strong>
              글귀
            </span>
          </div>
          <ul className="post-list">
            <PostList
              list={this.state.list}
              searchQuery={this.state.searchQuery}
            />
          </ul>
        </section>
        <Search search={this.search} />
      </React.Fragment>
    );
  }
}
export default connect()(List);
