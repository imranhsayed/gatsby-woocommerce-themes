import React from 'react';
import { isEmpty } from 'lodash';
import Products from "../products";

const SearchResults = ( { queryResults, allProducts } ) => {

	if ( isEmpty( queryResults ) && isEmpty( allProducts ) ) {
		return null;
	}

	const productsToBeDisplayed = ! isEmpty( queryResults ) ? queryResults : allProducts;

	return (
		<div className="search-resultss">
			<Products products={ productsToBeDisplayed }/>
		</div>
	);
};

export default SearchResults;
