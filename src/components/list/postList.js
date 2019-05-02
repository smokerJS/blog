import { Link } from 'gatsby';
import React from 'react';

const PostList = ({ list, searchQuery }) => {
  const [localList, setLocalList] = React.useState(list);
  React.useEffect(() => {
    setLocalList(list);
  }, [list]);

  const replaceAll = (str, searchStr, replaceStr) => str && str.split(searchStr).join(replaceStr);

  const prevContentParser = (excerpt) => {
    const queryIndex = excerpt.indexOf(searchQuery);
    if (searchQuery && queryIndex !== -1) {
      excerpt = excerpt.slice(queryIndex, 250);
      excerpt.length > 249 && (excerpt = `${excerpt.trim()} . . .`);
      excerpt = replaceAll(
        excerpt,
        searchQuery,
        `<i class="search-text">${searchQuery}</i>`,
      );
    } else {
      excerpt.length > 250
        && (excerpt = `${excerpt.slice(0, 250).trim()} . . .`);
    }
    return `<strong>${excerpt}</strong>`;
  };

  const prevTextParser = (text) => {
    if (searchQuery) {
      text = replaceAll(
        text,
        searchQuery,
        `<i class="search-text">${searchQuery}</i>`,
      );
    }
    return text;
  };

  return (
    <React.Fragment>
      {localList.map((obj, key) => {
        const item = obj.node.frontmatter;
        return (
          <li key={`post_${item.path}_${key}`}>
            <Link to={item.path}>
              <div>
                <b
                  className="post-title"
                  dangerouslySetInnerHTML={{
                    __html: prevTextParser(item.title),
                  }}
                />
                <div className="post-info-group">
                  <div
                    className="post-prev-content"
                    dangerouslySetInnerHTML={{
                      __html: prevContentParser(obj.node.excerpt),
                    }}
                  />
                  {[...item.tags].map(
                    (hashtag, hashtagKey) => (
                      hashtag
                        && <span
                          className="hashtag"
                          key={`tag_${item.path}_${hashtagKey}`}
                          dangerouslySetInnerHTML={{
                            __html: prevTextParser(hashtag),
                          }}
                        />
                    )
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

export default PostList;
