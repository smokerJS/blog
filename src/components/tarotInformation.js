import React from 'react';

const TarotInformation = () => (
  <section className="tarot-information">
    <div className="steps">
      <h2>남타 개인리딩 신청 방법</h2>
      <ul>
        <li>
          <strong>1. 남타 개인리딩 오픈톡 들어가기</strong>
          <p>남타 개인리딩 오픈톡 : <a href="https://open.kakao.com/o/sVAll9jb" target="_blank">https://open.kakao.com/o/sVAll9jb</a></p>
        </li>
        <li>
          <strong>2. 상담시간 예약하기</strong>
          <p>평일 오후 9시(21시)부터 상담 예약 가능<br />
          주말 및 공휴일 풀타임</p>
        </li>
        <li>
          <strong>3. 질문 정리하기</strong>
          <dl>
            <dt className="bad">나쁜예</dt>
            <dd>아는 사람한테 관심있는데 잘 될지 봐주세요!</dd>
            <dt>좋은예</dt>
            <dd>만난지 얼마나 되었고, 연락을 어느정도 하며 회사나 동아리 등에서 만난 사람입니다! 이런일이 있었는데 잘 될지 궁금해요!</dd>
            <dt className="bad">나쁜예</dt>
            <dd>연애운과 취업운이 궁금해요!</dd>
            <dt>좋은예</dt>
            <dd>얼마동안 솔로였고, 관심가는 사람이 있는데 어떤상황이에요! 3개월 안에 연애가 가능할까요?<br />취업을 준비하고 있는데 이런쪽을 공부하고 있으며 관심가는 회사가 있어요! 이만큼 준비했는데 면접을 본다면 결과가 좋을까요?</dd>
          </dl>
          <p>질문을 구체적으로 정리해주시고, 질문자 본인의 상황을 말씀해주셔야 더 정확한 타로리딩이 가능해요! 같은 카드가 나오더라도 질문자분의 상황에 따라 다른 의미로 해석이 가능하기 때문에 좋은 결과를 원하신다면 꼭 질문을 명확하게 정리해주세요!</p>
        </li>
      </ul>
    </div>
    <div className="notis">
      <ul>
        <li>상담비용은 1셔플당 10,000원이며 1셔플은 커다란 질문 한개를 뜻합니다.</li>
        <li>상담 도중 질문자분이 궁금한게 생기신다면 언제든지 질문하셔도 좋으며 타로에서 보이는건 숨김없이 전부 알려드립니다.</li>
        <li>질문자 한분당 하루 최대 3셔플까지 리딩을 도와드리며 1셔플당 약 15분 내외로 상담이 진행됩니다.</li>
        <li>상담은 시간제로 예약받지 않고 항상 셔플단위로 예약을 받습니다.</li>
        <li>예약시간은 유동적으로 당겨지거나 미뤄질 수 있으나, 이미 예약을 위해 입금하신 금액은 환불해드리지 않습니다.</li>
        <li>전화상담은 따로 진행하지 않으며 카카오톡 오픈톡방에서 상담을 진행합니다.</li>
      </ul>
    </div>
  </section>
);

export default TarotInformation;
