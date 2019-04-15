/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "@scss/main.scss";
import Header from "@components/header";
import Navigation from "@components/navigation";
import GlobalNavigationBar from "@components/globalNavigationBar";
import Footer from "@components/footer";
import Transition from "@components/transition";

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
// Layout.defaultProps = {
//   location: window.location
// }


export default Layout
