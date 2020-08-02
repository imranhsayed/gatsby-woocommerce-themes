import React from 'react';

import Product from '../../product';

const Products = ( props ) => {

	const { products } = props;

	if ( undefined === products ) {
		return null;
	}

	return (
		<div className="container">
			<h2 className="heading">Products</h2>
			<div className="product-container row">
				{ products.length ? (
					products.map( product => <Product key={ product.id } product={ product }/> )
				) : '' }
			</div>
		</div>
	)
};

export default Products;
