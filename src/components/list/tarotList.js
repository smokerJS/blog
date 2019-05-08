import React from 'react';
import TarotVideoData from '@base/tarotVideoData';

const TarotList = ({ list, setCurrVideoDataHandler, currVideoData }) => {
  const [localList, setLocalList] = React.useState([]);
  React.useEffect(() => {
    setLocalList(list);
  }, [list]);
  const movePageTop = () => {
    window.scrollTo(0, 50);
  };
  return (
    <React.Fragment>
      {localList.length && localList.map((obj, key) => (
        <li className={currVideoData.id === obj.id ? 'curr-video' : null} key={`tarot_list_${key}`} onClick={() => { currVideoData.id !== obj.id && (setCurrVideoDataHandler(obj), movePageTop()); }}>
          <TarotVideoData videoData={obj} />
        </li>
      ))
      }
    </React.Fragment>
  );
};

export default TarotList;
