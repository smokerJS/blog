const autoprefixer = require('autoprefixer');
const browserslist = require('browserslist');
module.exports = {
  siteMetadata: {
    title: `후론투엔두 블로그`,
    description: `이런 귀한 곳에 누추하신 분이 어떻게 오셨습니까?`,
    author: `@smokerjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [require('autoprefixer')()]
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@scss": "src/assets/styles",
          "@images": "src/assets/images",
          "@templates": "src/templates",
          "@posts": "content/posts",
          "@markdwon": "src/markdwon",
          "@image": "src/images"
        },
        extensions: ["js"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/post`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/ // See below to configure properly
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

