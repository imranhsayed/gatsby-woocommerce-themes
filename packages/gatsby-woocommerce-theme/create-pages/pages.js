
const { slash } = require( `gatsby-core-utils` );
const customTemplates = [ '/' ];
const singlePageTemplate = require.resolve(`../src/templates/page/index.js`);
const { ImageFragment } = require('./fragements/image/index');

// Get all the pages.
const GET_PAGES = `
query GET_PAGES {
  pages: allWpPage(limit: 5000) {
    nodes {
      id
      title
      content
      date
      uri
      featuredImage {
        node {
		  ...ImageFragment
        }
      }
    }
  }
}
${ ImageFragment }
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get all posts and pages, this will return the posts and pages.
		return await graphql( GET_PAGES )
			.then( ( { data } ) => {

				const { pages } = data;

				return { pages: pages.nodes };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( { pages } ) => {

		// 2. Create Single PAGE: Loop through all pages and create single pages for pages.
		pages &&
		pages.map( ( page ) => {

			// If its not a custom template, create the page.
			if ( ! customTemplates.includes( page.uri ) ) {

				createPage( {
					path: `${ page.uri }`,
					component: slash( singlePageTemplate ),
					context: { ...page }, // pass single page data in context, so its available in the singlePageTemplate in props.pageContext.
				} );

			}

		} );

	} )

};
