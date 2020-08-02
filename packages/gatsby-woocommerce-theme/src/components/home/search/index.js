import React from "react"
import { isEmpty } from "lodash";
import "./style.scss";
import ClientSearch from "../client-search";
import '../../../images/search-background.png';

const Search = props => {
	const {
		      products,
		      categories,
		      engine,
	      } = props;

	const placeholderText = 'Search...'

	return !isEmpty( props.products ) ? (
		<div
			className="search-section"
		>
			{/* Search */ }
			<ClientSearch
				products={ products }
				categories={ categories }
				engine={ engine }
				placeholder={ placeholderText }
			/>
		</div>
	) : (
		""
	)
}

export default Search
