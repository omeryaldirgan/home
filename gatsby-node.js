const { slugify } = require('./src/util/utility');
const path = require('path');
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
      const slugFromTitle = slugify(node.frontmatter.title)
      createNodeField({
        node,
        name: 'slug',
        value: slugFromTitle,
      })
    }
}

exports.createPages=({actions,graphql})=>{
  const {createPage}=actions
  // Page templates
  const templates = {
    singlePost: path.resolve('src/templates/single-post.js')
  }
  //graphql
  return graphql(`
     {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
     }
  `).then(res=>{
    if(res.errors)return Promise.rejects(res.errors)

    const posts=res.data.allMarkdownRemark.edges
    //create single blog post pages
    posts.forEach(({node})=>{
       createPage({
          path:node.fields.slug,
          component:templates.singlePost,
          context:{
            //passing slug for template to use to fetch the post
            slug:node.fields.slug,
          }
       })
    })

  })
  

}