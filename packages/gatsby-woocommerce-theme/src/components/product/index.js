import React from "react";
import Link from "gatsby-link";
import AddToCartButton from "../cart/add-to-cart-button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { isEmpty } from "lodash";
import "./style.scss";

const productImagePlaceholder = "https://via.placeholder.com/434";

const Product = (props) => {
  const { product } = props;

  const hasImagesSizes =
    !isEmpty(product.image) && !isEmpty(product.image.mediaDetails.sizes);
  const imgSrcUrl = hasImagesSizes
    ? product.image.mediaDetails.sizes[0].sourceUrl
    : "";
  const imgWidth = hasImagesSizes
    ? product.image.mediaDetails.sizes[0].width
    : 450;
  const imgHeight = hasImagesSizes
    ? product.image.mediaDetails.sizes[0].height
    : 450;

  return (
    // @TODO Need to handle Group products differently.
    !isEmpty(product) && "GroupProduct" !== product.nodeType ? (
      <div className="col-lg-4 col-md-6 mb-5">
        <Link to={product.link} className="product-image">
          {!isEmpty(product.image) ? (
            <LazyLoadImage
              alt={product.image.altText ? product.image.altText : ""}
              height={imgWidth}
              src={imgSrcUrl} // use normal <img> attributes as props
              width={imgHeight}
              effect="blur"
            />
          ) : !isEmpty(productImagePlaceholder) ? (
            <LazyLoadImage
              alt="default"
              height="450"
              src={productImagePlaceholder}
              width="450"
              effect="blur"
            />
          ) : null}
        </Link>
        <div className="card-body text-center">
          <h3 className="card-header">{product.name ? product.name : ""}</h3>
          <h6 className="card-subtitle">{product.price}</h6>
          <AddToCartButton product={product} />
        </div>
      </div>
    ) : (
      ""
    )
  );
};

export default Product;
