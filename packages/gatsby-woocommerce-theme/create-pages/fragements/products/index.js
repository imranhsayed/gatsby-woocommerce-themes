const { ImageFragment } = require('../image/index.js');

const AllProductsFragment = `
fragment AllProductsFragment on WpProduct {
        id
        productId
        nodeType
        link
        image {
		  ...ImageFragment
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
      ${ ImageFragment }
`;

module.exports.AllProductsFragment = AllProductsFragment;
