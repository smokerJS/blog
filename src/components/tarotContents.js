import React from 'react';
import TarotList from '@components/list/tarotList';
import TarotVideoParameter from '@base/tarotVideoParameter';
import TarotLoading from '@components/tarotLoading';
let videoLoadingTimer = null;
const TarotContents = () => {
  const [list, setList] = React.useState([[]]);
  const [nextPage, setNextPage] = React.useState(false);
  const [prevPage, setPrevPage] = React.useState(false);
  const [currVideoData, setCurrVideoData] = React.useState({});
  const [currPage, setCurrPage] = React.useState(0);
  const [videoLoading, setVideoLoading] = React.useState(false);
  const VIEW_LENGTH = 6;


  const setCurrVideoDataHandler = (setVideoData = {}) => {
    setVideoLoading(true);
    setCurrVideoData(setVideoData);
    videoLoadingTimer && clearTimeout(videoLoadingTimer);
    videoLoadingTimer = setTimeout(() => {
      setVideoLoading(false);
    }, 2000);
  };

  const setCurrPageHandler = (setPage = 0) => {
    list[setPage + 1] ? setNextPage(false) : setNextPage(true);
    setPage ? setPrevPage(false) : setPrevPage(true);
    setCurrPage(setPage);
  };

  const getVideoData = (videoIdList) => {
    if (!list[0]) return;
    let videoIds = '';
    for (const id of videoIdList) {
      videoIds = videoIds ? `${videoIds},${id}` : id;
    }

    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds}&key=${process.env.GATSBY_GOOGLE_YOUTUBE_API_KEY}&part=statistics,snippet`;
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        const data = JSON.parse(xhr.responseText);
        const localList = [];
        let tempList = [];
        let index = 0;
        for (const item of data.items) {
          if (index && index % VIEW_LENGTH === 0) {
            localList.push(tempList);
            tempList = [];
          }
          item.statistics.publishedAt = new Date(item.snippet.publishedAt);
          item.statistics.title = item.snippet.title;
          item.statistics.description = item.snippet.description;
          item.statistics.thumbnails = item.snippet.thumbnails.medium.url;
          item.statistics.id = item.id;
          tempList.push(item.statistics);
          index++;
        }
        tempList.length && localList.push(tempList);
        setCurrVideoData(localList[0][0]);
        setList(localList);
        localList[1].length ? setNextPage(false) : setNextPage(true);
        setPrevPage(true);
      }
    };
    xhr.open('GET', url);
    xhr.send();
  };

  const getYoutubeData = (pageToken = '') => {
    const optionParams = {
      part: 'id',
      key: process.env.GATSBY_GOOGLE_YOUTUBE_API_KEY,
      channelId: 'UCpO5KdEwqmS88dswUkYSgsw',
      order: 'date',
      maxResults: 50,
    };
    pageToken && (optionParams.pageToken = pageToken);

    let url = 'https://www.googleapis.com/youtube/v3/search?';

    for (const option in optionParams) {
      optionParams[option] && (url = `${url}${option}=${optionParams[option]}&`);
    }
    url = url.substr(0, url.length - 1);

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        const data = JSON.parse(xhr.responseText).items;
        const videoIdList = [];
        while (data.length) {
          const { videoId } = data.shift().id;
          videoId && videoIdList.push(videoId);
        }
        getVideoData(videoIdList);
      }
    };
    xhr.open('GET', url);
    xhr.send();
  };

  React.useEffect(() => {
    getYoutubeData();
  }, []);

  return (
    <React.Fragment>
      <section className="post-area taort-main">
        <div className="header-group">
          <h1>타로 모음집</h1>
        </div>
        {
          currVideoData.id && (
            <div className="screen-area">
              <div className="video-box">
                <div>
                  <iframe src={`https://www.youtube.com/embed/${currVideoData.id}`} title="video-screen" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              </div>
              <div className="content-box">
                <TarotVideoParameter videoData={currVideoData} view />
              </div>
              <TarotLoading view={videoLoading} />
            </div>
          )
        }
        <hr className="post-hr" />
        <div className="list-area">
          {
            list[currPage].length && (
              <ul className="video-list">
                <TarotList list={list[currPage]} setCurrVideoDataHandler={setCurrVideoDataHandler} currVideoData={currVideoData} />
              </ul>
            )
          }
        </div>
        <div className="btn-group">
          <button
            className="btn-prev"
            disabled={prevPage}
            onClick={() => {
              setCurrPageHandler(currPage - 1);
            }}
          >
            왼쪽
          </button>
          <button
            className="btn-next"
            disabled={nextPage}
            onClick={() => {
              setCurrPageHandler(currPage + 1);
            }}
          >
            오른쪽
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};
export default TarotContents;
