import { Link } from 'gatsby';
import React from 'react';

const TarotList = ({ list }) => {
  const [localList, setLocalList] = React.useState(list);
  React.useEffect(() => {
    setLocalList(list);
  }, [list]);

  return (
    <React.Fragment>
      {localList.map((obj, key) => {
          return (
            <li key={`tarot_list_${key}`}>
              <div>
                <span>
                <iframe src={`https://www.youtube.com/embed/${obj.id.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </span>
              </div>
              <div>
                <h2>{obj.snippet.title}</h2>
                <span>{obj.snippet.description}</span>
              </div>
            </li>
          )
        })
      }
    </React.Fragment>
  );
};

export default TarotList;
