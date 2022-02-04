/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from 'react';
 import { Helmet } from 'react-helmet';
 import PropTypes from 'prop-types';
 import { graphql, useStaticQuery, withPrefix } from 'gatsby';
 
 import Banner from './banner';
 import Footer from './footer';
 import Header from './header';
 import Nav from './nav';

 import "../../static/assets/css/styles.css"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
           navigation {
             title
             items {
               text
               link
             }
           }
           secondaryLinks {
             text
             link
           }
         }
       }
     }
   `);
 
   const { title, navigation, secondaryLinks } = data.site.siteMetadata;
 
   return (
     <>
       <a className="usa-skipnav" href="#main-content">
         Skip to main content
       </a>
       <Banner />
       <div className="usa-overlay" />
       <Header siteTitle={title}>
         <Nav {...{ navigation, secondaryLinks }} />
       </Header>
         {children}
       <Footer />
       <Helmet>
         <script
          src={withPrefix("/assets/js/uswds.min.js")}
         />
       </Helmet>
     </>
   );
 };
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 };
 
 export default Layout; 