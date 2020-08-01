import React from 'react';
import Link from 'gatsby-link';
// import AddToCartButton from '../components/cart/AddToCartButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { isEmpty } from 'lodash';

const productImagePlaceholder = 'https://via.placeholder.com/434';

const Product = ( props ) => {

	const { product } = props;

	return (
		// @TODO Need to handle Group products differently.
		! isEmpty( product ) && 'GroupProduct' !== product.nodeType ? (
			<div className="site-columns columns large-4 medium-6 small-12">
				<h3 className="card-header text-center">
					{ product.name ? product.name : '' }
				</h3>

				<Link
					to={ product.link }
				>
					{ !isEmpty( product.image ) ? (
						<LazyLoadImage
							alt={product.image.altText ? product.image.altText : '' }
							height="383"
							src={product.image.sourceUrl} // use normal <img> attributes as props
							width="383"
						/>

					) : !isEmpty( productImagePlaceholder ) ? (
						<img
							src={ productImagePlaceholder }
							alt="Placeholder product image"
						/>
					) : null }
				</Link>
				<div className="card-body text-center">
					<h6 className="card-subtitle mb-3">{ product.price }</h6>
					{/*<AddToCartButton product={ product }/>*/}
				</div>
			</div>
		) : (
			''
		)
	);
};

export default Product;
