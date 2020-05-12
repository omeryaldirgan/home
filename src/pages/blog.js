import React from "react"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
const Blog=({data:{postListQuery,metaData,heroData}})=>{
    
    const posts = postListQuery.edges;
    const {title}=metaData.siteMetadata;
    const profileImage=heroData.childImageSharp.fluid;
    return(
     <Layout>
        <SEO title="Blog"/>
          {
              posts.map(({node})=>(
                  <Post
                    key={node.id}
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    tags={node.frontmatter.tags}
                    flag={node.frontmatter.flag.childImageSharp.fluid}
                    read={node.frontmatter.read}
                    profileTitle={title}
                    profileImage={profileImage}
                  />
              ))
          }
     </Layout>
    )
}

export const postListQuery = graphql`
  {
    metaData: site {
      ...SiteMetaData
    }
    heroData: file(name: { eq: "profile" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
   postListQuery: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "/data/blog/" }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MM Do YYYY")
              tags
              read
              flag {
                childImageSharp {
                  fluid(maxWidth:32) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt(pruneLength: 200)
          }
        }
      }
  }
`
export default Blog
