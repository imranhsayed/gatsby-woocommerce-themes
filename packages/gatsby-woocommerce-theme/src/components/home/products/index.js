import React from 'react';
import { isEmpty } from 'lodash';

import Product from '../../product';

const Products = ( props ) => {

	const { products } = props;

	if ( undefined === products ) {
		return null;
	}

	console.warn( 'pro', products.length );

	return (
		<div>
			<h2 className="mt-5 text-center">Products</h2>
			<div className="product-container row">
				{ products.length ? (
					products.map( product => <Product key={ product.id } product={ product }/> )
				) : '' }
			</div>
		</div>
	)
};

export default Products;
