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
	return graphql( GET_FRONT_PAGE ).then( ( { data } ) => {

		const { products, categories } = data;


		let allTheProducts = [];
		products.edges && products.edges.map( product => {

			// Push the categories data in form of an array, to make it searchable
			let productsData = product;
			productsData.categoriesData = [];

			productsData.node.productCategories.nodes.map( category => {
				productsData.categoriesData.push( category.name );
			} );

			allTheProducts.push( productsData );

		} );

		console.log( JSON.stringify( allTheProducts, null, 4 ) );

		process.exit();
	} )

};
