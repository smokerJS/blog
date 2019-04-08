import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";


const Navigation = () => (
  <nav className="nav-menu">
    <div id="beforeNavContents">

    </div>
    <ul>
      <li>
        <div>
          <Link to="/">
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
          <Link to="/">
            <img src={require("@images/navigation/img-rope-menu2.png")}/>
            <strong>포투포리오</strong>
          </Link>
        </div>
      </li>
      <li>
        <div>
          <Link to="/">
            <img src={require("@images/navigation/img-rope-menu1.png")}/>
            <strong>문의</strong>
          </Link>
        </div>
      </li>
    </ul>
  </nav>
)

// Navigation.propTypes = {

// }

// Navigation.defaultProps = {

// }

export default Navigation
