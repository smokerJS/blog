/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "@components/header";
import Navigation from "@components/navigation";
import GlobalNavigationBar from "@components/globalNavigationBar";
import Footer from "@components/footer";
import Transition from "@components/transition";

class Layout extends React.Component {
  componentDidMount=()=>{
    console.log(this.props.location)
  }
  render(){
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
          <GlobalNavigationBar pathname={this.props.location.pathname}/>
          <section id="screen">
            <section id="mainScreen">
              <Header siteTitle={data.site.siteMetadata.title} />
              <Navigation pathname={this.props.location.pathname}/>
              <Transition location={this.props.location}>
                  <main>{this.props.children}</main>
              </Transition>
            </section>
            <Footer pathname={this.props.location.pathname}/>
          </section>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
