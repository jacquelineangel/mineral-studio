module.exports = {
  siteMetadata: {
    title: `mi—ne—ral®`,
    description: 'mi—ne—ral® is an innovation studio, founded and headquartered in Berlin, Germany.',
    twitterUsername: '@mineralstu',
    image: 'src/images/icon.png',
    siteUrl: `https://www.mi-ne-ral.studio`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
  ],
};
