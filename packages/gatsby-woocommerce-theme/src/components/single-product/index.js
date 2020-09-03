import React from "react";
import AddToCartButton from "../cart/add-to-cart-button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { isEmpty } from "lodash";
import SocialShareCard from "../social-share-card";
import ProductCarousel from "../product-carousel";
import { sanitize } from "../../utils/functions";

const productImagePlaceholder = "https://via.placeholder.com/434";

const SingleProduct = ( props ) => {
	const { product } = props;

	const hasImagesSizes =
		      !isEmpty( product.image ) && !isEmpty( product.image.mediaDetails.sizes );
	const imgSrcUrl      = hasImagesSizes
		? product.image.sourceUrl
		: "";

	const displayProductImages = () => {
		if ( !isEmpty( product.galleryImages.nodes ) ) {
			return <ProductCarousel galleryImages={ product.galleryImages }/>
		} else if ( !isEmpty( product.image ) ) {
			return (
				<figure>
					<LazyLoadImage
						alt={ product.image.altText ? product.image.altText : "" }
						src={ imgSrcUrl } // use normal <img> attributes as props
						effect="blur"
					/>
				</figure>
			)
		} else if ( !isEmpty( productImagePlaceholder ) ) {
			return (
				<figure>
					<LazyLoadImage
						alt="default"
						height="450"
						src={ productImagePlaceholder }
						width="450"
						effect="blur"
					/>
				</figure>
			)
		} else {
			return null;
		}
	}

	return (
		// @TODO Need to handle Group products differently.
		!isEmpty( product ) && "GroupProduct" !== product.nodeType ? (
			<div className="single-product-page container py-5">
				<div className="row">
					<div className="col-lg-5 col-md-6 mb-5 product-image-wrap">
						<div className="product-image">
							{ displayProductImages() }
						</div>
					</div>
					<div className="col-lg-7 col-md-6 mb-5">
						<div className="single-product-desc">
							<h3>{ product.name ? product.name : "" }</h3>
							{ !isEmpty( product.description ) ? (
								<p dangerouslySetInnerHTML={ { __html: sanitize( product.description ) } }/>
							) : null }
							<div className="single-product-add-to-cart">
								<h6 className="card-subtitle mb-3">{ product.price }</h6>
								<AddToCartButton product={ product }/>
							</div>
							<SocialShareCard title={ product.name } sectionTitle="Share this product"
							                 link={ product.uri }/>
						</div>
					</div>
				</div>
			</div>
		) : null
	);
};

export default SingleProduct;
