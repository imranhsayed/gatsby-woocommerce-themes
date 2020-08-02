import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

import Product from '../../product';

const Products = ( props ) => {

	const { products }                 = props;
	const [activePage, setCurrentPage] = useState( 1 );
	const productsPerPage              = 6;

	if ( undefined === products ) {
		return null;
	}

	// Logic for displaying current products
	const indexOfLastProduct  = activePage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts     = products.slice( indexOfFirstProduct, indexOfLastProduct );

	const renderProducts = currentProducts.map( ( product, index ) => {
		return <Product key={ product.id } product={ product }/>;
	} );

	const handlePageChange = ( pageNumber ) => {
		setCurrentPage( pageNumber )
	};

	return (
		<div className="container">
			<h2 className="heading">Products</h2>
			<div className="product-container row">
				{ renderProducts }
			</div>
			<div className="pagination">
				<Pagination
					activePage={ activePage }
					itemsCountPerPage={ productsPerPage }
					totalItemsCount={ products.length }
					pageRangeDisplayed={ 10 }
					onChange={ handlePageChange }
				/>
			</div>
		</div>
	)
};

export default Products;
