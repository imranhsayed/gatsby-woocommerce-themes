const { slash }         = require( `gatsby-core-utils` );
const frontPageTemplate = require.resolve( `../src/templates/front-page/index.js` );

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  categories: allWpProductCategory(limit: 5) {
    nodes {
      id
      name
      uri
      image {
        id
        altText
        caption
        sourceUrl
        mediaDetails {
          sizes {
            height
            width
            name
            sourceUrl
          }
        }
      }
    }
  }
  products:allWpProduct(limit: 100) {
    edges {
      node {
        id
        productId
        nodeType
        link
        image {
          id
          altText
          caption
          sourceUrl
          mediaDetails {
            sizes {
              height
              width
              name
              sourceUrl
            }
          }
        }
        productCategories {
          nodes {
            id
            name
          }
        }
        ... on WpSimpleProduct {
          id
          name
          price
        }
        ... on WpVariableProduct {
          id
          name
          price
        }
        ... on WpExternalProduct {
          id
          name
          price
          externalUrl
        }
        ... on WpGroupProduct {
          id
          name
          products {
            nodes {
              ... on WpSimpleProduct {
                id
                name
                price
              }
            }
          }
        }
      }
    }
  }
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_FRONT_PAGE )
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

		createPage( {
			path: `/`,
			component: slash( frontPageTemplate ),
			context: {
				categories,
				allProducts,
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

	} )

};
