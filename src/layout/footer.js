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
    const script = document.createElement("script");
    script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    document.body.appendChild(script);
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-9281405567346041",
      enable_page_level_ads: true
    });
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
