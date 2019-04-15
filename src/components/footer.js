import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";


class Footer extends React.Component {
  state = {
    className : 'background1',
    currPath: window ? window.location.pathname : '/'
  }

  componentDidMount = () => {
    setInterval(()=>{this.changeClassNameHander()}, 2000);
  }

  changeClassNameHander = () => {
    this.setState({
      className : this.state.className === 'background1' ? 'background2' : 'background1'
    })
  }

  render() {
    return (
      <footer className={`footer-global ${this.state.className} ${this.state.currPath === '/' ? 'home' : 'hide'}`}></footer>
    )
  }
}



// Footer.propTypes = {

// }

// Footer.defaultProps = {

// }

export default Footer
