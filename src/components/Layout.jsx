/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import '../assets/sass/main.scss';

const Layout = ({ children }) => {
  const [isPreloaded, setIsPreloaded] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);

  const linkHandler = (e, name) => {
    e.preventDefault();
    return name === 'about' && setFooterVisible(!footerVisible);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPreloaded(false);
    }, 100);
    return () => timeoutId && clearTimeout(timeoutId);
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
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content:
                  "Unilorin Secondary School 2010 Graduating set Student's Gallery",
              },
              { name: 'keywords', content: 'site, web' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div
            className={`main-body ${footerVisible ? 'content-active' : ''}
             ${isPreloaded ? 'is-preload' : ''}`}
          >
            <div id="wrapper">
              <Header onAction={linkHandler} />
              <div
                id="main"
                onClick={(e) => {
                  if (footerVisible) {
                    e.preventDefault();
                    e.stopPropagation();
                    setFooterVisible(!footerVisible);
                  }
                }}
              >
                {children}
              </div>
              <Footer
                isVisible={footerVisible}
                onClose={() => setFooterVisible(!footerVisible)}
              />
            </div>
          </div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
