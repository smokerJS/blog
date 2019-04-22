import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";


class Navigation extends React.Component {

  render() {
    const { location } = this.props
    return (
      <nav className="nav-top-menu">
        <div id="beforeNavContents"></div>
          <ul className={location.pathname === '/' ? 'home' : 'hide'}>
            <li>
              <div>
                <Link to="/develop">
                  <img src={require("@images/navigation/img-rope-menu5.png")}/>
                  <strong>디베로먼투</strong>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/">
                  <img src={require("@images/navigation/img-rope-menu4.png")}/>
                  <strong>타로</strong>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/">
                  <img src={require("@images/navigation/img-rope-menu3.png")}/>
                  <strong>라이푸</strong>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <a href="https://github.com/smokerJS" target="_blank">
                  <img src={require("@images/navigation/img-rope-menu2.png")}/>
                  <strong>깃허부</strong>
                </a>
              </div>
            </li>
            <li>
              <div>
                <Link href="/question" to="/question">
                  <img src={require("@images/navigation/img-rope-menu1.png")}/>
                  <strong>문의</strong>
                </Link>
              </div>
            </li>
          </ul>
      </nav>
    )
  }
}

// Navigation.propTypes = {
//   location: PropTypes.object
// }

// Navigation.defaultProps = {

// }

export default Navigation
