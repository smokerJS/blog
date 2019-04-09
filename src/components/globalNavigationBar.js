import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";


const GlobalNavigationBar = () => (
  <nav className="nav-global-side-menu">

    <div className="profile-group">
      <img src={require("@image/common/smokerjs-profile.jpeg")}/>
      <dl>
        <dt>직업</dt>
        <dd>개발조무사</dd>
        <dt>특기</dt>
        <dd>고기태우기</dd>
        <dt>목표</dt>
        <dd>지구대폭발</dd>
      </dl>
    </div>

    <ul>

    </ul>
  </nav>
)

// GlobalNavigationBar.propTypes = {

// }

// GlobalNavigationBar.defaultProps = {

// }

export default GlobalNavigationBar
