import React from "react";
import Link from "gatsby-link";
import AddToCartButton from "../../cart/add-to-cart-button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { isEmpty } from "lodash";
import { removeProductFromWishList } from "../../../utils/functions";

const productImagePlaceholder = "https://via.placeholder.com/434";

const WishlistProduct = (props) => {

	const { product, getWishList, setWishList } = props;

	if ( isEmpty( product ) ) {
		return null;
	}

	const imgSrcUrl = product.image.sourceUrl ? product.image.sourceUrl : '';

	const handleRemoveFromWishList = () => {
		removeProductFromWishList( product.productId, getWishList, setWishList )
	}

	return (
		// @TODO Need to handle Group products differently.
		!isEmpty(product) && "GroupProduct" !== product.type ? (
			<div className="col-lg-4 col-md-6 mb-5">
				<Link to={product.link} className="product-image">
					{!isEmpty(product.image) ? (
						<figure>
							<LazyLoadImage
								alt={product.image.altText ? product.image.altText : ""}
								src={imgSrcUrl} // use normal <img> attributes as props
								effect="blur"
							/>
						</figure>
					) : !isEmpty(productImagePlaceholder) ? (
						<figure>
							<LazyLoadImage
								alt="default"
								height="450"
								src={productImagePlaceholder}
								width="450"
								effect="blur"
							/>
						</figure>
					) : null}
				</Link>
				<div className="card-body text-center">
					<h3 className="card-header">{product.name ? product.name : ""}</h3>
					<h6 className="card-subtitle">{product.price}</h6>
					{ 'EXTERNAL' !== product.type ? <AddToCartButton product={product} /> : (
						<div className="mb-5">
							<a href={product.externalUrl} target="_blank" rel="noreferrer nofollow">
								<button className="btn btn-outline-dark">Buy Now</button>
							</a>
						</div>
					)}
					<div className="mb-2" style={{ marginTop: '-10px' }}>
						<button onClick={ handleRemoveFromWishList } className="btn btn-outline-dark">Remove from wishlist</button>
					</div>
				</div>
			</div>
		) : null
	);
};

export default WishlistProduct;
