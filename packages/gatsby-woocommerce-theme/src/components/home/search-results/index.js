import React from 'react';
import { isEmpty } from 'lodash';
import Link from 'gatsby-link';

const SearchResults = ( { queryResults } ) => {

	if ( isEmpty( queryResults ) ) {
		return null;
	}

	return (
		<ul className="search-results">
			{ queryResults.map( post => (
				<li key={ post.id }>
					<Link to={ post.link }><span dangerouslySetInnerHTML={{ __html: post.name }}/></Link>
				</li>
			) ) }
		</ul>
	);
};

export default SearchResults;
