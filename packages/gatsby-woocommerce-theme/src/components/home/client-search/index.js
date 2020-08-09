import React, { Component } from "react"
import * as JsSearch from "js-search"
import "./style.scss"
import SearchResults from "../search-results"
import Categories from "../categories";

class ClientSearch extends Component {
	state = {
		isLoading: true,
		searchResults: [],
		search: null,
		isError: false,
		indexByTitle: false,
		indexByCategory: false,
		termFrequency: true,
		removeStopWords: false,
		searchQuery: "",
		selectedStrategy: "",
		selectedSanitizer: "",
	};

	/**
	 * React lifecycle method that will inject the data into the state.
	 */
	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( prevState.search === null ) {
			const { engine } = nextProps

			return {
				indexByTitle: engine.TitleIndex,
				indexByCategory: engine.CategoryIndex,
				termFrequency: engine.SearchByTerm,
				selectedSanitizer: engine.searchSanitizer,
				selectedStrategy: engine.indexStrategy,
			}
		}
		return null
	}

	async componentDidMount() {
		this.rebuildIndex()
	}

	/**
	 * rebuilds the overall index based on the options
	 */
	rebuildIndex = () => {
		const {
			      selectedStrategy,
			      selectedSanitizer,
			      removeStopWords,
			      termFrequency,
			      indexByTitle,
			      indexByCategory,
		      } = this.state;

		const { products } = this.props;

		const dataToSearch = new JsSearch.Search( "id" );

		if ( removeStopWords ) {
			dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
				dataToSearch.tokenizer
			)
		}

		/**
		 * Defines an indexing strategy for the data
		 * read more about it here https://github.com/bvaughn/js-search#configuring-the-index-strategy
		 */
		if ( selectedStrategy === "All" ) {
			dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
		}
		if ( selectedStrategy === "Exact match" ) {
			dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy()
		}
		if ( selectedStrategy === "Prefix match" ) {
			dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
		}

		/**
		 * Defines the sanitizer for the search
		 * to prevent some of the words from being excluded
		 */
		selectedSanitizer === "Case Sensitive"
			? ( dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer() )
			: ( dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer() )
		termFrequency === true
			? ( dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex( "id" ) )
			: ( dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex() )

		// sets the index attribute for the data
		if ( indexByTitle ) {
			dataToSearch.addIndex( "name" )
		}

		if ( indexByCategory ) {
			dataToSearch.addIndex( "categoriesData" )
		}

		dataToSearch.addDocuments( products ) // adds the data to be searched

		this.setState( { search: dataToSearch, isLoading: false } )
	}
	/**
	 * handles the input change and perform a search with js-search
	 * in which the results will be added to the state
	 */
	searchData   = e => {
		const { search }  = this.state;
		const queryResult = search.search( e.target.value );
		this.setState( { searchQuery: e.target.value, searchResults: queryResult } )
	}
	handleSubmit = e => {
		e.preventDefault()
	}

	render() {
		const { searchResults, searchQuery } = this.state;
		const { placeholder, categories, category, initialProducts } = this.props;

		const queryResults = searchResults;


		return (
			<>
				<form className="search-form" onSubmit={ this.handleSubmit }>
					<label htmlFor="Search" className="screen-reader-text">
						Enter your search here
					</label>
					<input
						id="Search"
						className="search-input"
						value={ searchQuery }
						onChange={ this.searchData }
						placeholder={ placeholder }
						autoComplete="off" // removes the autosearch suggestions
					/>
				</form>
				<Categories categories={ categories } category={ category }/>
				<SearchResults queryResults={ queryResults } initialProducts={ initialProducts }/>
			</>
		)
	}
}

export default ClientSearch
