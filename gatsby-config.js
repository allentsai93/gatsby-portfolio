require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Allen Tsai`,
    description: `Allen Tsai Developer Portfolio`,
    author: `Allen Tsai`,
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
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // Simple config, passing URL
    // Passing paramaters (passed to apollo-link)
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        // Url to query from
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    // Creating arbitrary Apollo Link (for advanced situations)
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "GitHub",
    //     fieldName: "github",
    //     // Create Apollo Link manually. Can return a Promise.
    //     createLink: pluginOptions => {
    //       return createHttpLink({
    //         uri: "https://api.github.com/graphql",
    //         headers: {
    //           Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    //         },
    //         fetch,
    //       })
    //     },
    //   },
    // },
  ],
}
