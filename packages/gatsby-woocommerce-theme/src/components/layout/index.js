/**
 * Layout component contains header and footer
 *
 * @package gatsby-wordpress-theme
 */

import React from "react"
import PropTypes from "prop-types"

import './../../sass/common.scss';

import Header from "../header";
import Footer from "../footer";

const Layout = ( { children }) => {
  return (
    <>
      <Header/>
	    <main className="main-container">{children}</main>
	  <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
