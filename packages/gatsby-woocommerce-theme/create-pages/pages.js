
const { slash } = require( `gatsby-core-utils` );
const customTemplatesUris = [ '/'  ];
const customTemplateSlugs = [ 'checkout', 'cart', 'my-account', 'products' ];
const singlePageTemplate = require.resolve(`../src/templates/page/index.js`);
const myAccountPageTemplate = require.resolve(`../src/templates/my-account/index.js`);
const { ImageFragment } = require('./fragements/image/index');
const { SeoFragment } = require('./fragements/seo/index.js');

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
      slug
      seo {
        ...SeoFragment
      }
      featuredImage {
        node {
		  ...ImageFragment
        }
      }
    }
  }
  categories: allWpProductCategory(limit: 5) {
    nodes {
      id
      name
      uri
    }
  }
}
${ ImageFragment }
${ SeoFragment }
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get all posts and pages, this will return the posts and pages.
		return await graphql( GET_PAGES )
			.then( ( { data } ) => {

				const { pages, categories } = data;

				return { pages: pages.nodes, categoriesData: categories.nodes };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( { pages, categoriesData } ) => {

		// 2. Create Single PAGE: Loop through all pages and create single pages for pages.
		pages &&
		pages.map( ( page ) => {

			// If its not a custom template, create the page.
			if ( ! customTemplatesUris.includes( page.uri ) &&! customTemplateSlugs.includes( page.slug )  ) {

				createPage( {
					path: `${ page.uri }`,
					component: slash( singlePageTemplate ),
					context: { ...page, categoriesData }, // pass single page data in context, so its available in the singlePageTemplate in props.pageContext.
				} );

			}

			// Load custom template for my-account
			if ( 'my-account' === page.slug ) {
				createPage( {
					path: `/my-account`,
					component: slash( myAccountPageTemplate ),
					context: { ...page },
				} );
			}

		} );

	} )

};
