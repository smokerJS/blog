import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
  state = {
    className: 'background1',
  }

  componentDidMount = () => {
    setInterval(() => {
      this.changeClassNameHander();
    }, 2000);
  }

  changeClassNameHander = () => {
    this.setState({
      className:
        this.state.className === 'background1' ? 'background2' : 'background1',
    });
  }

  render() {
    const { location } = this.props;
    return (
      <footer
        className={`footer-global ${this.state.className}
        ${
      location.pathname === '/'
        ? 'home'
        : location.pathname.indexOf('question') !== -1
          ? 'hide'
          : 'none'
      }`}
      />
    );
  }
}

export default connect(
  state => ({ location: state.app.location }),
  null,
)(Footer);
