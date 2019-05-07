import React from 'react';

const TarotVideoParameter = ({ videoData, view }) => {
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
        videoData.id && (
          <div className="video-parameter">
            {
              !view && (
                <img src={videoData.thumbnails} />
              )
            }
            <h1>{videoData.title}</h1>
            {
              view && (
                <p>{videoData.description}</p>
              )
            }
            <dl>
              <dt>조회수</dt>
              <dd className="view-count">{videoData.viewCount}</dd>
              {
                view && (
                  <React.Fragment>
                    <dt>좋아요</dt>
                    <dd className="like-count">{videoData.likeCount}</dd>
                  </React.Fragment>
                )
              }
              {
                view && (
                  <React.Fragment>
                    <dt>덧글</dt>
                    <dd className="comment-count">{videoData.commentCount}</dd>
                  </React.Fragment>
                )
              }
              {
                view && (
                  <React.Fragment>
                    <dt>게시일</dt>
                    <dd className="published-at">{getFormatDate(videoData.publishedAt)}</dd>
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
