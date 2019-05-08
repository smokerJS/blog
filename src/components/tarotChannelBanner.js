import React from 'react';

const TarotChannelBanner = ({ channelData }) => (
  <React.Fragment>
    {
      channelData.id && (
        <section className="tarot-channel-banner">
          <a href={`https://www.youtube.com/channel/${channelData.id}`} target="_blank">
            <div>
              <img src={channelData.thumbnails} alt="남타 유튜브" />
              <b>{channelData.title}</b>
              <div>
                <strong>{channelData.subscriberCount}명 구독</strong>
                <p>유튜브에서 동영상 전체보기</p>
              </div>
            </div>
          </a>
        </section>
      )
    }
  </React.Fragment>
);

export default TarotChannelBanner;
