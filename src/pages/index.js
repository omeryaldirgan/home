import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
     <section className="Main">
      <h1 className="Main-h1 color-text">Growth Hacking and UI/UX Design for <span>JAMstack</span></h1>
      <h3 className="Main-h3 color-text">Featuring React, Vue, Gatsby, Next, Netlify, and design system.</h3>
     </section>
  </Layout>
)

export default IndexPage

