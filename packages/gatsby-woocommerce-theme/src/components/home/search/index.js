import React from "react"
import { isEmpty } from "lodash";
import "./style.scss";
import ClientSearch from "../client-search";
import '../../../images/search-background.png';

const Search = props => {
	const {
		      products,
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
				engine={ engine }
				placeholder={ placeholderText }
			/>
		</div>
	) : (
		""
	)
}

export default Search
