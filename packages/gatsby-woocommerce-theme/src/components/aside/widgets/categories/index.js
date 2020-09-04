import React from "react";
import { isEmpty } from "lodash";
import Link from 'gatsby-link';
import './style.scss'

const CategoryWidget = ( { categories } ) => {

	console.warn( 'categories', categories );

	if ( isEmpty( categories ) ) {
		return null;
	}

	return (
		categories.length ? (
			<div>
				<h3>Category</h3>
				<ul>
					{ categories.map( category => (
						<Link className="category-widget w-100 d-block border-bottom pt-3 pb-3" key={ category.id } to={ `${category.uri}#archive` }>{ category.name }</Link>
					) ) }
				</ul>
			</div>
		) : null
	)
}

export default CategoryWidget
