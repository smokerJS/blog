import { Link } from 'gatsby';
import React from 'react';
import { connect } from 'react-redux';

const Navigation = ({ location }) => (
  <nav className="nav-top-menu">
    <div id="beforeNavContents" />
    <ul className={location.pathname === '/' ? 'home' : 'hide'}>
      <li>
        <div>
          <Link to="/develop">
            <img src={require('@images/navigation/img-rope-menu5.png')} />
            <strong>디베로먼투</strong>
          </Link>
        </div>
      </li>
      <li>
        <div>
          <Link to="/tarot">
            <img src={require('@images/navigation/img-rope-menu4.png')} />
            <strong>타로</strong>
          </Link>
        </div>
      </li>
      <li>
        <div>
          <Link to="/life">
            <img src={require('@images/navigation/img-rope-menu3.png')} />
            <strong>라이푸</strong>
          </Link>
        </div>
      </li>
      <li>
        <div>
          <a href="https://github.com/smokerJS" target="_blank">
            <img src={require('@images/navigation/img-rope-menu2.png')} />
            <strong>깃허부</strong>
          </a>
        </div>
      </li>
      <li>
        <div>
          <Link to="/question">
            <img src={require('@images/navigation/img-rope-menu1.png')} />
            <strong>문의</strong>
          </Link>
        </div>
      </li>
    </ul>
  </nav>
);

export default connect(
  state => ({ location: state.app.location }),
  null,
)(Navigation);
