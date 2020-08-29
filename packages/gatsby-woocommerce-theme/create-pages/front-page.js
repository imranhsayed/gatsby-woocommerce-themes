const { slash }         = require( `gatsby-core-utils` );
const frontPageTemplate = require.resolve( `../src/templates/front-page/index.js` );
const singleProductPageTemplate = require.resolve( `../src/templates/product/index.js` );
const { ProductsFragment } = require('./fragements/products/index.js');
const { SeoFragment } = require('./fragements/seo/index.js');

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  page: wpPage(slug: {eq: "home"}) {
    id
    title
	uri
	seo {
	  ...SeoFragment
	}
  }
  categories: allWpProductCategory(limit: 5) {
    nodes {
      id
      name
      uri
      description
      image {
        ...ImageFragment
      }
    }
  }
  products: allWpProduct(limit: 1000) {
    edges {
      node {
      ...ProductsFragment
      seo {
        ...SeoFragment
      }
      }
    }
  }
}
${ ProductsFragment }
${ SeoFragment }
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_FRONT_PAGE )
			.then( ( { data } ) => {

				const { products, categories, page } = data;

				let allTheProducts = [];
				products.edges && products.edges.map( product => {

					// Push the categories data in form of an array, to make it searchable
					let productsData = product.node;
					productsData.categoriesData = [];

					productsData.productCategories.nodes.map( category => {
						productsData.categoriesData.push( category.name );
					} );

					allTheProducts.push( productsData );

				} );

				return {  page: page, categories: categories, allProducts: allTheProducts };
			} );


	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page, categories, allProducts } ) => {

		createPage( {
			path: `/`,
			component: slash( frontPageTemplate ),
			context: {
				page,
				categories,
				allProducts,
				category: 'all',
				postSearchData: {
					products: allProducts,
					options: {
						indexStrategy: `Prefix match`,
						searchSanitizer: `Lower Case`,
						TitleIndex: true,
						AuthorIndex: true,
						CategoryIndex: true,
						SearchByTerm: true,
					},
				},
			},
		} );

		// Create Single Product Pages.
		allProducts.length && allProducts.map( product => {
			createPage( {
				path: product.link,
				component: slash( singleProductPageTemplate ),
				context: { product },
			} );
		} );
	} )

};
