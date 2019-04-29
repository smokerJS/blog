import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "@scss/main.scss";
import Header from "./header";
import Navigation from "./navigation";
import GlobalNavigationBar from "./globalNavigationBar";
import Footer from "./footer";
import Transition from "./transition";

class Layout extends React.Component {
  state = {
    location : {pathname : '/'}
  }

  componentDidMount() {
    this.setState({
      location: window.location
    })
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
          <GlobalNavigationBar location={this.state.location}/>
          <section id="screen">
            <section id="mainScreen">
              <Header siteTitle={data.site.siteMetadata.title} />
              <Navigation location={this.state.location}/>
              <Transition location={this.state.location}>
                  <main>{this.props.children}</main>
              </Transition>
            </section>
            <Footer location={this.state.location}/>
          </section>
          </>
        )}
      />
    )
  }

}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object
}


export default Layout;