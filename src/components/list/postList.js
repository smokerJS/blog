import { Link } from 'gatsby';
import React from 'react';
import TextEllipsis from 'react-text-ellipsis';

const PostList = ({ list, searchQuery }) => {
  const [localList, setLocalList] = React.useState(list);
  React.useEffect(() => {
    setLocalList(list);
  }, [list]);

  const replaceAll = (str, searchStr, replaceStr) => str && str.split(searchStr).join(replaceStr);

  const prevContentParser = (excerpt) => {
    const queryIndex = excerpt.indexOf(searchQuery);
    if (searchQuery && queryIndex !== -1) {
      excerpt = excerpt.substr(queryIndex, 500).trim();
      excerpt = replaceAll(
        excerpt,
        searchQuery,
        `<i class="search-text">${searchQuery}</i>`,
      );
    } else {
      excerpt.length > 500
        && (excerpt = `${excerpt.substr(0, 500).trim()}`);
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
                  <TextEllipsis
                    lines={3}
                    ellipsisChars="..."
                  >
                    <div
                      className="post-prev-content"
                      dangerouslySetInnerHTML={{
                        __html: prevContentParser(obj.node.excerpt),
                      }}
                    />
                  </TextEllipsis>
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
};

export default PostList;
