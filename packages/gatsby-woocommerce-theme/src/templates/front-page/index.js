import React from "react";
import Search from "../../components/home/search";
import { isEmpty } from 'lodash';

const FrontPage = ( props ) => {

	const {
		      pageContext: {
			      postSearchData: { allPosts, options }
		      }
	      } = props;

	console.warn( 'allProducts', props );

	return (
		<>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<Search posts={ allPosts } engine={ options }/>
					</>
				) : (
					<div>Someting went wrong</div>
				)
			}
		</>
	)
};
export default FrontPage;

