import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

class GlobalNavigationBar extends React.Component{

  state = {
    open: false
  }

  openHandler = () => {
    console.log(this.props.pathname.indexOf('question'))
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <section className={`nav-global-side-menu ${this.state.open ? 'open' : ''} ${this.props.pathname === '/' ? 'home' : 'hide'}`}>
        <div id="menuOpenBtn" onClick={()=>{this.openHandler()}}>
          메뉴판
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <strong>디베로먼투</strong>
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
              <Link to="/question">
                <strong className={this.props.pathname.indexOf('question') !== -1 ? "focus" : 'tab'}>문의</strong>
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

GlobalNavigationBar.propTypes = {
  focusTab: PropTypes.string
}

// GlobalNavigationBar.defaultProps = {

// }

export default GlobalNavigationBar
