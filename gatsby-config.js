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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://taconchile.us10.list-manage.com/subscribe/post?u=4f2a6a9c19a4c7a2cb9cb2e2f&amp;id=5d0a753a7b', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    'gatsby-plugin-sass',
  ],
}
