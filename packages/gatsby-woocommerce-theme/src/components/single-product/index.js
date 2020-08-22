import React from "react";
import AddToCartButton from "../cart/add-to-cart-button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { isEmpty } from "lodash";

const productImagePlaceholder = "https://via.placeholder.com/434";

const SingleProduct = ( props ) => {
	const { product } = props;

	const hasImagesSizes =
		      !isEmpty( product.image ) && !isEmpty( product.image.mediaDetails.sizes );
	const imgSrcUrl      = hasImagesSizes
		? product.image.mediaDetails.sizes[ 0 ].sourceUrl
		: "";
	const imgWidth       = hasImagesSizes
		? product.image.mediaDetails.sizes[ 0 ].width
		: 450;
	const imgHeight      = hasImagesSizes
		? product.image.mediaDetails.sizes[ 0 ].height
		: 450;

	return (
		// @TODO Need to handle Group products differently.
		!isEmpty( product ) && "GroupProduct" !== product.nodeType ? (
			<div className="single-product-page">
				<div className="row">
					<div className="col-lg-4 col-md-6 mb-5">

						<div className="product-image">
							{ !isEmpty( product.image ) ? (
								<LazyLoadImage
									alt={ product.image.altText ? product.image.altText : "" }
									height={ imgWidth }
									src={ imgSrcUrl } // use normal <img> attributes as props
									width={ imgHeight }
									effect="blur"
								/>
							) : !isEmpty( productImagePlaceholder ) ? (
								<LazyLoadImage
									alt="default"
									height="450"
									src={ productImagePlaceholder }
									width="450"
									effect="blur"
								/>
							) : null }
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mb-5">
						<h3>
							{ product.name ? product.name : "" }
						</h3>
						{ ! isEmpty( product.description ) ? <p dangerouslySetInnerHTML={{ __html: product.description }}/> : null }
						<div className="single-product-add-to-cart">
							<h6 className="card-subtitle mb-3">{ product.price }</h6>
							<AddToCartButton product={ product }/>
						</div>
					</div>
				</div>
			</div>
		) : null

	);
};

export default SingleProduct;
