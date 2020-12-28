module.exports = {
  siteMetadata: {
    title: `Modern Godaam`,
    siteUrl: `https://www.moderngodaam.com`,
    description: `Your one stop for warehousing needs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "moderngodaam.com",
        acl: "public-read",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Modern Godaam`,
        short_name: `Modern Godaam`,
        icon: "src/images/favicon.png",
      },
    },
  ],
};
