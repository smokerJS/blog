import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

class DevelopPostList extends React.Component {
  state = {
    list: this.props.list,
  }

  componentWillReceiveProps = (nextProps) => {
    const { list } = nextProps;
    this.setState({ list });
  }

  replaceAll = (str, searchStr, replaceStr) => str.split(searchStr).join(replaceStr)

  prevContentParser = (excerpt) => {
    const queryIndex = excerpt.indexOf(this.props.searchQuery);
    if (this.props.searchQuery && queryIndex !== -1) {
      excerpt = excerpt.slice(queryIndex, 250);
      excerpt.length > 249 && (excerpt = `${excerpt.trim()} . . .`);
      excerpt = this.replaceAll(
        excerpt,
        this.props.searchQuery,
        `<i class="search-text">${this.props.searchQuery}</i>`,
      );
    } else {
      excerpt.length > 250
        && (excerpt = `${excerpt.slice(0, 250).trim()} . . .`);
    }
    return `<strong>${excerpt}</strong>`;
  }

  prevTextParser = (text) => {
    if (this.props.searchQuery) {
      text = this.replaceAll(
        text,
        this.props.searchQuery,
        `<i class="search-text">${this.props.searchQuery}</i>`,
      );
    }
    return text;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.list.map((obj, key) => {
          const item = obj.node.frontmatter;
          return (
            <li key={`post_${item.path}_${key}`}>
              <Link to={item.path}>
                <div>
                  <b
                    className="post-title"
                    dangerouslySetInnerHTML={{
                      __html: this.prevTextParser(item.title),
                    }}
                  />
                  <div className="post-info-group">
                    <div
                      className="post-prev-content"
                      dangerouslySetInnerHTML={{
                        __html: this.prevContentParser(obj.node.excerpt),
                      }}
                    />
                    {[...item.tags].map(
                      (obj, key) => obj && (
                        <span
                          className="hashtag"
                          key={`tag_${item.path}_${key}`}
                          dangerouslySetInnerHTML={{
                            __html: this.prevTextParser(obj),
                          }}
                        />
                      ),
                    )}
                    <strong className="date-info">{item.date}</strong>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}

// GlobalNavigationBar.propTypes = {
//   location: PropTypes.object
// }

// GlobalNavigationBar.defaultProps = {

// }

export default DevelopPostList;
