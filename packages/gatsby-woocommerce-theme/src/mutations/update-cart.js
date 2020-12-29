import { gql } from "@apollo/client";

/**
 * Update Cart
 *
 * This query is used for both updating the items in the cart and delete a cart item.
 * When the cart item needs to be deleted, we should pass quantity as 0 in the input along with other fields.
 */
const UPDATE_CART = gql`
    mutation ($input: UpdateItemQuantitiesInput!) {
      updateItemQuantities(input: $input) {
        items {
          key
          product {
            node {
              id
              databaseId
              name
              description
              type
              onSale
              slug
              averageRating
              reviewCount
              image {
                id
                sourceUrl
                altText
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  altText
                }
              }
            }
          }
          variation {
            node {
              id
              databaseId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice
              image {
                id
                sourceUrl
                altText
              }
            }
            attributes {
              id
              attributeId
              name
              value
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
        removed {
          key
          product {
            node {
              id
              databaseId
            }
          }
          variation {
            node {
              id
              databaseId
            }
          }
        }
        updated {
          key
          product {
            node {
              id
              databaseId
            }
          }
          variation {
            node {
              id
              databaseId
            }
          }
        }
      }
    }
`;

export default UPDATE_CART;
