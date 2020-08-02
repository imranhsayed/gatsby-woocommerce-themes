import React from 'react';
import { isEmpty } from 'lodash';
import Products from "../products";
import './style.scss';

const SearchResults = ( { queryResults, allProducts } ) => {

	if ( isEmpty( queryResults ) && isEmpty( allProducts ) ) {
		return null;
	}

	// If search results are not available show all products.
	const productsToBeDisplayed = ! isEmpty( queryResults ) ? queryResults : allProducts;

	return (
		<div className="search-results">
			<Products products={ productsToBeDisplayed }/>
		</div>
	);
};

export default SearchResults;
