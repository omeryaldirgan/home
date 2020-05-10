module.exports = {
  siteMetadata: {
    title: `Ömer Yaldırgan`,
    description: `Frontend Developer from Ankara react,next,gatsby`,
    author: `omeryaldirhan`,
    username: '@omeryaldirganim',
    url: 'https://omeryaldirgan.com',
    socialLinks: {
      email: { name: 'e-mail', url: 'mailto:omeryaldirgan@hotmail.com' ,description:'Send' },
      github: { name: 'Github', url: 'https://github.com/omeryaldirgan',description:'Repositories on' },
      codepen: { name: 'Codepen', url: 'https://codepen.io/yaldirgan' ,description:'Small works on'}
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
     {//postlar için
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/data`,
      },
    },  
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              linkImagesToOriginal:true,
              maxWidth: 1200,
              wrapperStyle:`margin:20px auto`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
