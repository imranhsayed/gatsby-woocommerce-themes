const AllProductsFragment = `
fragment AllProductsFragment on allWpProduct(limit: 100) {
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
`;

module.exports.AllProductsFragment = AllProductsFragment;
