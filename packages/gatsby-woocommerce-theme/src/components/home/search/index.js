import React from "react"
import { isEmpty } from "lodash";
import "./style.scss";
import ClientSearch from "../client-search";

const Search = props => {
  const {
    posts,
    engine,
  } = props;

  console.warn( 'posts', posts );

  const backgroundURL = '';
  const placeholderText = 'Search...'

  return !isEmpty(props.posts) ? (
    <div
      className="search-section"
      style={{
        background: `url( ${backgroundURL} )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
	    backgroundColor: '#1e5663'
      }}
    >
      {/* Search */}
      <ClientSearch
        posts={posts}
        engine={engine}
        placeholder={placeholderText}
      />
    </div>
  ) : (
    ""
  )
}

export default Search
