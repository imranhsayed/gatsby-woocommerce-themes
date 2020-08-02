import React from 'react';
import Link from 'gatsby-link';
// import AddToCartButton from '../components/cart/AddToCartButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { isEmpty } from 'lodash';

const productImagePlaceholder = 'https://via.placeholder.com/434';

const Product = ( props ) => {

	const { product } = props;

	// console.warn( product.image.mediaDetails.sizes[ 0 ] );
	// return null;


	let imgSrcUrl   = !isEmpty( product.image ) && ( null !== product.image.mediaDetails.sizes[ 0 ].sourceUrl ) ? product.image.mediaDetails.sizes[ 0 ].sourceUrl : '';
	const imgWidth  = !isEmpty( product.image ) && ( !isEmpty( product.image.mediaDetails.sizes ) ) ? product.image.mediaDetails.sizes[ 0 ].width : 450;
	const imgHeight = !isEmpty( product.image ) && ( !isEmpty( product.image.mediaDetails.sizes ) ) ? product.image.mediaDetails.sizes[ 0 ].height : 450;

	return (
		// @TODO Need to handle Group products differently.
		!isEmpty( product ) && 'GroupProduct' !== product.nodeType ? (
			<div className="site-columns columns large-4 medium-6 small-12">
				<h3 className="card-header text-center">
					{ product.name ? product.name : '' }
				</h3>

				<Link
					to={ product.link }
				>
					{ !isEmpty( product.image ) ? (
						<LazyLoadImage
							alt={ product.image.altText ? product.image.altText : '' }
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
				</Link>
				<div className="card-body text-center">
					<h6 className="card-subtitle mb-3">{ product.price }</h6>
					{/*<AddToCartButton product={ product }/>*/ }
				</div>
			</div>
		) : (
			''
		)
	);
};

export default Product;
