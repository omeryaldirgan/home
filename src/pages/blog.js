import React from "react"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const Blog=(props)=>{
    const posts = props.data.allMarkdownRemark.edges;
    return(
     <Layout>
        <SEO title="Blog"/>
          <h1 className='color-text'>Blog</h1>
          {
              posts.map(({node})=>(
                  <Post
                  key={node.id}
                  slug={node.fields.slug}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  tags={node.frontmatter.tags}
                  
                  />
              ))
          }
     </Layout>
    )
}

export const postListQuery = graphql`
  query postListQuery{
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default Blog
