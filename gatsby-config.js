const autoprefixer = require('autoprefixer');
const browserslist = require('browserslist');

module.exports = {
  siteMetadata: {
    title: '후론투엔두 블로그',
    description: '이런 귀한 곳에 누추하신 분이 어떻게 오셨습니까?',
    author: '@smokerjs',
    siteUrl: 'https://www.smoker.ga'
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139922434-1",
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-adsense`,
    //   options: {
    //     publisherId: `ca-pub-9281405567346041`
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.smoker.ga',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'master'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/common/icon-smoker.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [require('autoprefixer')()],
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages',
          '@scss': 'src/assets/styles',
          '@images': 'src/assets/images',
          '@templates': 'src/templates',
          '@posts': 'content/posts',
          '@markdwon': 'src/markdwon',
          '@base': 'src/base',
          '@state': 'src/state',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/src/post`,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layout'),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // In your gatsby-transformer-remark plugin array
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
              sizeByPixelDensity : true,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
                rel: "noopener noreferrer"
            }
          }
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
