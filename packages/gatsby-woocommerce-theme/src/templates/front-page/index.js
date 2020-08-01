import React from "react";
import Search from "../../components/home/search";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";

const FrontPage = ( props ) => {

	const {
		      pageContext: {
			      postSearchData: { allPosts, options }
		      }
	      } = props;

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<Search posts={ allPosts } engine={ options }/>
					</>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default FrontPage;

