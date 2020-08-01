import React from "react"
import { isEmpty } from "lodash";
import "./style.scss";
import ClientSearch from "../client-search";
import '../../../images/search-background.png';

const Search = props => {
	const {
		      posts,
		      engine,
	      } = props;
	const placeholderText = 'Search...'

	return !isEmpty( props.posts ) ? (
		<div
			className="search-section"
		>
			{/* Search */ }
			<ClientSearch
				posts={ posts }
				engine={ engine }
				placeholder={ placeholderText }
			/>
		</div>
	) : (
		""
	)
}

export default Search
