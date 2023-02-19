module.exports = {
  siteMetadata: {
    title: `Studio Mineral`,
    description: 'Studio Mineral is a Berlin-based design studio developing creative and strategic work for early-stage startups.',
    twitterUsername: '@mineralstu',
    image: 'src/images/icon.png',
    siteUrl: `https://www.mineral.studio`,
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
