import React from 'react';
import { isEmpty } from 'lodash';
import Link from 'gatsby-link';
import './style.scss';

const Categories = ( props ) => {

	const { categories } = props;

	console.warn( 'cate', props );

	if ( isEmpty( categories ) ) {
		return null;
	}

	return (
		<div className="categories-list-wrap">
			{ categories.nodes.length ? (
				<ul className="categories-list">
					{ categories.nodes.map( category => <Link className="categories-link" to={ category.uri }>{ category.name }</Link>  ) }
				</ul>
			) : null }
		</div>
	);
};

export default Categories;
