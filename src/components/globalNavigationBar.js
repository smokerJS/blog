import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

class GlobalNavigationBar extends React.Component{

  state = {
    open: false,
  }

  openHandler = () => {
    this.setState({
      open: !this.state.open
    })
  }

  menuClickHandler = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { location } = this.props
    return (
      <section className={`nav-global-side-menu ${this.state.open ? 'open' : ''} ${location.pathname === '/' ? 'home' : 'hide'}`}>
        <div id="menuOpenBtn" className={`${this.state.open ? '' : 'open'}`}onClick={()=>{this.openHandler()}}>
          메뉴판
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <strong className={location.pathname.indexOf('develop') !== -1 ? "focus" : 'tab'}>디베로먼투</strong>
              </Link>
            </li>
            <li>
              <Link to="/">
                <strong>타로</strong>
              </Link>
            </li>
            <li>
              <Link to="/">
                <strong>라이푸</strong>
              </Link>
            </li>
            <li>
              <a href="https://github.com/smokerJS" target="_blank">
                <strong>깃허부</strong>
              </a>
            </li>
            <li>
              <Link to="/question" onClick={()=>{this.menuClickHandler()}}>
                <strong className={location.pathname.indexOf('question') !== -1 ? "focus" : 'tab'}>문의</strong>
              </Link>
            </li>
          </ul>
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
        </nav>
      </section>
    )
  }


}

// GlobalNavigationBar.propTypes = {
//   location: PropTypes.object
// }

// GlobalNavigationBar.defaultProps = {

// }

export default GlobalNavigationBar
