import React from 'react';
import TarotVideoParameter from '@base/tarotVideoParameter';

const TarotList = ({ list, setCurrVideoDataHandler, currVideoData }) => {
  const [localList, setLocalList] = React.useState([]);
  React.useEffect(() => {
    setLocalList(list);
  }, [list]);
  return (
    <React.Fragment>
      {localList.length && localList.map((obj, key) => (
        <li className={currVideoData.id === obj.id && 'curr-video'} key={`tarot_list_${key}`} onClick={()=>{setCurrVideoDataHandler(obj)}}>
          <TarotVideoParameter videoData={obj} />
        </li>
      ))
      }
    </React.Fragment>
  );
};

export default TarotList;
