import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '@scss/main.scss';
import { onLoadLocation } from '@state/app';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from './header';
import Navigation from './navigation';
import GlobalNavigationBar from './globalNavigationBar';
import Footer from './footer';
import Transition from './transition';


const Layout = ({ dispatch, children }) => {
  React.useEffect(() => {
    dispatch(onLoadLocation(window.location));
  }, []);
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
          <Helmet>
            <script>
              {`
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-1540853335472527",
                  enable_page_level_ads: true
                });
              `}
            </script>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </Helmet>
          <GlobalNavigationBar />
          <section id="screen">
            <section id="mainScreen">
              <Header siteTitle={data.site.siteMetadata.title} />
              <Navigation />
              <Transition>
                <main>{children}</main>
              </Transition>
            </section>
            <Footer />
          </section>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default connect()(Layout);
