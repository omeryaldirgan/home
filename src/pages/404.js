import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="Main notFound">
        <h1 className="color-text">404</h1>
    </section>
  </Layout>
)
export default NotFoundPage
