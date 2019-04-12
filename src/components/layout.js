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

const Layout = ({children, location}) => (

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
      <GlobalNavigationBar/>
      <section id="screen">
        <section id="mainScreen">
          <Header siteTitle={data.site.siteMetadata.title} />
          <Navigation/>
          <Transition location={location}>
              <main>{children}</main>
          </Transition>
        </section>
        <Footer/>
      </section>
      </>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object
}
// Layout.defaultProps = {
//   location: window.location
// }


export default Layout
