import React from "react"
import PropTypes from "prop-types"
import {graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div>
        <main><div className="container ">{children}</div></main>
       <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export const query= graphql`
  fragment SiteMetaData on Site {
    siteMetadata {
      username
      socialLinks {
        github{
          name
          url
          description
        }
        codepen{
          name
          url
          description
        }
        email{
          name
          url
          description
        }
      }
    }
  }
`
export default Layout
