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
        <main className="content"><div className="container ">{children}</div></main>
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
      title
      image
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

<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5f4892d2cc6a6a5947af946c/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
export default Layout
