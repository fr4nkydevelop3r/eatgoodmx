module.exports = {
  siteMetadata: {
    title: 'eatgoodmx - Vende por internet: easy',
    author: 'Frank Andrade',
    description:
      'Software as a service for Small and Medium restaurants. Sell online without crazy fees.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
