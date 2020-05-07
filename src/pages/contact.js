import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import {graphql } from "gatsby"


const Contact=({ data: { metaData} })=>{

  const {github,codepen,email}=metaData.siteMetadata.socialLinks;
    return(
     <Layout>
        <SEO title="Contact"/>
        <section className="Main">
          <h1 className="Main-h1 color-text">Contact.</h1>
          <Social urls={[github, codepen, email]} />
        </section>
     </Layout>
    )
}
export const query = graphql`
  {
    metaData: site {
      ...SiteMetaData
    }
  }
`
export default Contact
