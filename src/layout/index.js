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
          <Helmet
            meta={[
              {
                name: 'naver-site-verification',
                content: '3c96bea960b162e6a7493387aa7d3332339cf2d0',
              },
              {
                name: 'google-site-verification',
                content: '5vTFFtifaPXUDBu_8bKERSpfSq6pECJ_zENaaV3A6lw',
              }]}
          >
            <script>
              {`
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-9281405567346041",
                  enable_page_level_ads: true
                });
              `}
            </script>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
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
