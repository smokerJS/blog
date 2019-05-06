import { Link } from 'gatsby';
import React from 'react';
import TarotVideoParameter from '@base/tarotVideoParameter';

const TarotList = ({ list }) => {
  const [localList, setLocalList] = React.useState(list);
  React.useEffect(() => {
    setLocalList(list);
  }, [list]);

  return (
    <React.Fragment>
      {localList.map((obj, key) => (
        <li key={`tarot_list_${key}`}>
          <TarotVideoParameter videoId={obj.id.videoId} />
        </li>
      ))
      }
    </React.Fragment>
  );
};

export default TarotList;
