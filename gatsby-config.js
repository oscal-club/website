module.exports = {
  siteMetadata: {
    author: {
      name: 'Foo'
    },
    title: `OSCAL Club`,
    description: `This is the official website of the OSCAL Club community.`,
    navigation: [
      {
        items: [{ text: 'Home', link: '/' }],
      },
      {
        items: [{ text: 'Blog', link: '/blog' }],
      },
      {
        items: [{ text: 'Document', link: '/document' }],
      },
      {
        items: [
          { text: 'Document with sidenav', link: '/document-with-sidenav' },
        ],
      },
      {
        title: 'Document submenu',
        items: [
          { text: 'Navigation link', link: '/' },
          { text: 'Navigation link', link: '/' },
          { text: 'Navigation link', link: '/' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Secondary link', link: '/' },
      { text: 'Another secondary link', link: '/' },
    ],

    /**
     * Search.gov configuration
     * 
     * 1. Create an account with Search.gov https://search.usa.gov/signup
     * 2. Add a new site.
     * 3. Add your site/affiliate name here.
     */
    searchgov: {
      
      // You should not change this.
      endpoint: 'https://search.usa.gov',
      
      // replace this with your search.gov account
      affiliate: 'federalist-uswds-example',
      
      // replace with your access key
      access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=',
      
      // this renders the results within the page instead of sending to user to search.gov
      inline: true, 
    },

    /**
     * Digital Analytics Program (DAP) configuration
     * 
     * USAID   - Agency for International Development
     * USDA    - Department of Agriculture
     * DOC     - Department of Commerce
     * DOD     - Department of Defense
     * ED      - Department of Education
     * DOE     - Department of Energy
     * HHS     - Department of Health and Human Services
     * DHS     - Department of Homeland Security
     * HUD     - Department of Housing and Urban Development
     * DOJ     - Department of Justice
     * DOL     - Department of Labor
     * DOS     - Department of State
     * DOI     - Department of the Interior
     * TREAS   - Department of the Treasury
     * DOT     - Department of Transportation
     * VA      - Department of Veterans Affairs
     * EPA     - Environmental Protection Agency
     * EOP     - Executive Office of the President
     * GSA     - General Services Administration
     * NASA    - National Aeronautics and Space Administration
     * NARA    - National Archives and Records Administration
     * NSF     - National Science Foundation
     * NRC     - Nuclear Regulatory Commission
     * OPM     - Office of Personnel Management
     * USPS    - Postal Service
     * SBA     - Small Business Administration
     * SSA     - Social Security Administration
     */
    dap: {
      // agency: 'your-agency',

      // Optional
      // subagency: 'your-subagency',
    },

    /**
     * Google Analytics configuration
     */
    ga: {
      // ua: 'your-ua',
    },
  },
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
