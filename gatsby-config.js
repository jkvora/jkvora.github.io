// gatsby-config.js

module.exports = {
    pathPrefix: "/public",
    siteMetadata: {
        title: `Jalak Vora`,
        name: `Jalak`,
        siteUrl: `https://gatsby-theme-novela.netlify.com`,
        description: `This is my description that will be used in the meta tags and important for search results`,
    
        // important to set the main text that appears in the hero
        hero: {
          heading: `Hi, I am Jalak Vora , Engineer by Profession.`,
          maxWidth: 652,
        },
        social: [
          {
            name: `twitter`,
            url: `https://twitter.com/narative`,
          },
          {
            name: `github`,
            url: `https://github.com/narative`,
          },
        ],
      },
    plugins: ['@narative/gatsby-theme-novela'],
  };