import React from 'react';
import { isEmpty } from 'lodash';
import Products from "../products";
import './style.scss';

const SearchResults = ( { queryResults, initialProducts } ) => {

	if ( isEmpty( queryResults ) && isEmpty( initialProducts ) ) {
		return null;
	}

	// If search results are not available show all initialProducts.
	const productsToBeDisplayed = ! isEmpty( queryResults ) ? queryResults : initialProducts;

	return (
		<div className="search-results">
			<Products products={ productsToBeDisplayed }/>
		</div>
	);
};

export default SearchResults;
