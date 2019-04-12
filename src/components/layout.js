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

const Layout = ({ children, menu, focusTab }) => (
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
      <section id="screen">
        <GlobalNavigationBar focusTab={focusTab}/>
        <section id="mainScreen">
          <Header siteTitle={data.site.siteMetadata.title} />
          <Navigation menu={menu}/>
          <main>{children}</main>
        </section>
        <Footer/>
      </section>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
