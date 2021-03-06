const { ImageFragment } = require('../image/index.js');

const ProductsFragment = `
fragment ProductsFragment on WpProduct {
        id
        databaseId
        nodeType
        link
        description
        galleryImages {
          nodes {
            id
            title
            altText
            mediaItemUrl
          }
        }
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

module.exports.ProductsFragment = ProductsFragment;
