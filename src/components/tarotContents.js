import React from 'react';
import TarotList from '@components/list/tarotList';
import TarotVideoParameter from '@base/tarotVideoParameter';

const TarotContents = () => {
  const [list, setList] = React.useState([]);
  const [nextPageToken, setNextPageToken] = React.useState('');
  const [prevPageToken, setPrevPageToken] = React.useState('');

  React.useEffect(() => {
    getYoutubeData();
  }, []);

  const getYoutubeData = (order = 'date', nextPageToken = '', prevPageToken = '') => {
    const optionParams = {
      part: 'id',
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
      <section className="post-area taort-main">
        <div className="header-group">
          <h1>타로 모음집</h1>
        </div>
        <div className="screen-area">
          <div className="video-box">
            <div>
              <iframe src={`https://www.youtube.com/embed/rq6D0YtXHBQ`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            </div>
          </div>
          <div className="content-box">
            <TarotVideoParameter videoId={'rq6D0YtXHBQ'} view={true}/>
          </div>
        </div>
        <ul className="post-list">
          <TarotList list={list} />
        </ul>
      </section>
    </React.Fragment>
  );
};
export default TarotContents;
