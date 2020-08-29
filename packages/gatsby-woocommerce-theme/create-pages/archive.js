const { slash }         = require( `gatsby-core-utils` );
const archivePageTemplate = require.resolve( `../src/templates/archive/index.js` );
const { ProductsFragment } = require('./fragements/products/index.js');
const { SeoFragment } = require('./fragements/seo/index.js');

// Get all the front page data.
const GET_ARCHIVES = `
query GET_ARCHIVES {
  categories: allWpProductCategory(limit: 100) {
    nodes {
      id
      name
      uri
      description
      seo {
        ...SeoFragment
      }
      image {
        ...ImageFragment
      }
      products {
        nodes {
        ...ProductsFragment
       }
      }
    }
  }
  products: allWpProduct(limit: 100) {
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
		return await graphql( GET_ARCHIVES )
			.then( ( { data } ) => {


				const { products, categories } = data;

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

				return {  categories: categories, allProducts: allTheProducts };
			} );


	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { categories, allProducts } ) => {

		categories.nodes.length && categories.nodes.map( ( category ) => {

			createPage( {
				path: category.uri,
				component: slash( archivePageTemplate ),
				context: {
					categories,
					allProducts,
					category,
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
		});



	} )

};
