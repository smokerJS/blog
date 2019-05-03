import React from 'react';
import TarotList from '@components/list/tarotList';

const TarotContents = () => {
  const [list, setList] = React.useState([]);
  const [nextPageToken, setNextPageToken] = React.useState('');
  const [prevPageToken, setPrevPageToken] = React.useState('');

  React.useEffect(() => {
    getYoutubeData();
  }, []);

  const getYoutubeData = (order = 'date', nextPageToken = '', prevPageToken = '') => {
    const optionParams = {
      part: 'snippet',
      key: process.env.GATSBY_GOOGLE_YOUTUBE_API_KEY,
      channelId: 'UCpO5KdEwqmS88dswUkYSgsw',
      order,
      maxResults: 4,
      nextPageToken,
      prevPageToken,
    };

    let url = 'https://www.googleapis.com/youtube/v3/search?';

    for (const option in optionParams) {
      url = `${url}${option}=${optionParams[option]}&`;
    }
    url = url.substr(0, url.length - 1);

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        const data = JSON.parse(xhr.responseText);
        setList(data.items);
        data.nextPageToken ? setNextPageToken(data.nextPageToken) : setNextPageToken('');
        data.prevPageToken ? setPrevPageToken(data.prevPageToken) : setPrevPageToken('');
      } else {}
    };
    xhr.open('GET', url);
    xhr.send();
  };


  return (
    <React.Fragment>
      <section className="post-area develop-main">
        <div className="search-group">
          <div className="search-btn-group">
            <img src={require('@images/common/icon-search.png')} />
            <span>검색</span>
          </div>
        </div>
        <div className="header-group">
          <h1>타로 모음집</h1>
        </div>
        <ul className="post-list">
          <TarotList list={list} />
        </ul>
      </section>
    </React.Fragment>
  );
};
export default TarotContents;
