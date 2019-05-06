import React from 'react';

const TarotVideoParameter = ({ videoId, view }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.GATSBY_GOOGLE_YOUTUBE_API_KEY}&part=statistics,snippet`;
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        const data = JSON.parse(xhr.responseText);
        const uploadDate = new Date(data.items[0].snippet.publishedAt);
        data.items[0].statistics.publishedAt = getFormatDate(uploadDate);
        data.items[0].statistics.title = data.items[0].snippet.title;
        data.items[0].statistics.description = data.items[0].snippet.description;
        data.items[0].statistics.thumbnails = data.items[0].snippet.thumbnails.default.url;
        setData(data.items[0].statistics);
      } else {}
    };
    xhr.open('GET', url);
    xhr.send();
  }, []);

  const getFormatDate = (date) => {
    const year = date.getFullYear();
    let month = (1 + date.getMonth());
    month = month >= 10 ? month : `0${month}`;
    let day = date.getDate();
    day = day >= 10 ? day : `0${day}`;
    return `${year}/${month}/${day}`;
  };

  return (
    <React.Fragment>
      {
        data && (
          <div className="video-parameter">
            {
              !view && (
                <img src={data.thumbnails} />
              )
            }
            <h1>{data.title}</h1>
            {
              view && (
                <p>{data.description}</p>
              )
            }
            <dl>
              <dt>조회수</dt>
              <dd className="view-count">{data.viewCount}</dd>
              <dt>좋아요</dt>
              <dd className="like-count">{data.likeCount}</dd>
              <dt>덧글</dt>
              <dd className="comment-count">{data.commentCount}</dd>
              <dt>게시일</dt>
              <dd className="published-at">{data.publishedAt}</dd>
            </dl>
          </div>
        )
      }
    </React.Fragment>
  );
};
export default TarotVideoParameter;
