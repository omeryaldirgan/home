import React from "react"
import SEO from "../components/Seo"
import Layout from '../components/layout'
import Content from '../components/content'


const SinglePost=({data})=>{
const post=data.markdownRemark.frontmatter;
return(
    <Layout>
        <SEO title={post.title} />
        <Content {...data}/>      
    </Layout>
)
}
export const postQuery = graphql`
   query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        tags
        date(formatString: "MMM Do YYYY")
        }
      }
    }
 
`
export default SinglePost;
