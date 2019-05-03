import { Link } from 'gatsby';
import React from 'react';
import { connect } from 'react-redux';

const GlobalNavigationBar = ({ location }) => {
  const [open, setOpen] = React.useState(false);
  const openHandler = () => {
    setOpen(!open);
  };
  const menuClickHandler = () => {
    setOpen(false);
  };
  return (
    <section
      className={`nav-global-side-menu ${open ? 'open' : ''} ${
        location.pathname === '/' ? 'home' : 'hide'
      }`}
    >
      <div
        id="menuOpenBtn"
        className={`${open ? '' : 'open'}`}
        onClick={() => {
          openHandler();
        }}
      >
        메뉴판
      </div>
      <nav>
        <ul>
          <li>
            <Link
              to="/develop"
              onClick={() => {
                menuClickHandler();
              }}
            >
              <strong
                className={
                  location.pathname.indexOf('develop') !== -1
                    ? 'focus'
                    : 'tab'
                }
              >
                디베로먼투
              </strong>
            </Link>
          </li>
          <li>
            <Link to="/">
              <strong>타로</strong>
            </Link>
          </li>
          <li>
            <Link
              to="/life"
              onClick={() => {
                menuClickHandler();
              }}
            >
              <strong
                className={
                  location.pathname.indexOf('life') !== -1
                    ? 'focus'
                    : 'tab'
                }
              >
                라이푸
              </strong>
            </Link>
          </li>
          <li>
            <a href="https://github.com/smokerJS" target="_blank">
              <strong>깃허부</strong>
            </a>
          </li>
          <li>
            <Link
              to="/question"
              onClick={() => {
                menuClickHandler();
              }}
            >
              <strong
                className={
                  location.pathname.indexOf('question') !== -1
                    ? 'focus'
                    : 'tab'
                }
              >
                문의
              </strong>
            </Link>
          </li>
        </ul>
        <div className="profile-group">
          <img src={require('@images/common/img-profile.jpeg')} />
          <dl>
            <dt>직업</dt>
            <dd>개발조무사</dd>
            <dt>특기</dt>
            <dd>고기태우기</dd>
            <dt>목표</dt>
            <dd>지구대폭발</dd>
          </dl>
        </div>
      </nav>
    </section>
  );
};

export default connect(
  state => ({ location: state.app.location }),
  null,
)(GlobalNavigationBar);
