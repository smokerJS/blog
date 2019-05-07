import React from 'react';

const TarotVideoParameter = ({ videoId, view }) => {
  const [param, setParam] = React.useState(null);

  const getFormatDate = (date) => {
    const year = date.getFullYear();
    let month = (1 + date.getMonth());
    month = month >= 10 ? month : `0${month}`;
    let day = date.getDate();
    day = day >= 10 ? day : `0${day}`;
    return `${year}/${month}/${day}`;
  };

  React.useEffect(() => {
    if (!videoId) return;
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.GATSBY_GOOGLE_YOUTUBE_API_KEY}&part=statistics,snippet`;
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        const data = JSON.parse(xhr.responseText);
        const uploadDate = new Date(data.items[0].snippet.publishedAt);
        data.items[0].statistics.publishedAt = getFormatDate(uploadDate);
        data.items[0].statistics.title = data.items[0].snippet.title;
        data.items[0].statistics.description = data.items[0].snippet.description;
        data.items[0].statistics.thumbnails = data.items[0].snippet.thumbnails.medium.url;
        setParam(data.items[0].statistics);
      }
    };
    xhr.open('GET', url);
    xhr.send();
  }, [videoId]);


  return (
    <React.Fragment>
      {
        param && (
          <div className="video-parameter">
            {
              !view && (
                <img src={param.thumbnails} />
              )
            }
            <h1>{param.title}</h1>
            {
              view && (
                <p>{param.description}</p>
              )
            }
            <dl>
              <dt>조회수</dt>
              <dd className="view-count">{param.viewCount}</dd>
              {
                view && (
                  <React.Fragment>
                    <dt>좋아요</dt>
                    <dd className="like-count">{param.likeCount}</dd>
                  </React.Fragment>
                )
              }
              {
                view && (
                  <React.Fragment>
                    <dt>덧글</dt>
                    <dd className="comment-count">{param.commentCount}</dd>
                  </React.Fragment>
                )
              }
              {
                view && (
                  <React.Fragment>
                    <dt>게시일</dt>
                    <dd className="published-at">{param.publishedAt}</dd>
                  </React.Fragment>
                )
              }
            </dl>
          </div>
        )
      }
    </React.Fragment>
  );
};
export default TarotVideoParameter;
