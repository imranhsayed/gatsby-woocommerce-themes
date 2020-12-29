import { gql } from "@apollo/client";

const GET_CART = gql`
    query GET_CART {
      cart {
        contents {
          nodes {
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
                  srcSet
                  altText
                  title
                }
                galleryImages {
                  nodes {
                    id
                    sourceUrl
                    srcSet
                    altText
                    title
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
                  srcSet
                  altText
                  title
                }
              }
              attributes {
                id
                name
                value
              }
            }
            quantity
            total
            subtotal
            subtotalTax
          }
        }
        appliedCoupons {
          nodes {
            id
            discountType
            amount
            dateExpiry
            products {
              nodes {
                id
              }
            }
            productCategories {
              nodes {
                id
              }
            }
          }
        }
        subtotal
        subtotalTax
        shippingTax
        shippingTotal
        total
        totalTax
        feeTax
        feeTotal
        discountTax
        discountTotal
      }
    }
`;

export default GET_CART;
