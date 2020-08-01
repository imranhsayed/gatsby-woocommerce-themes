import React from "react";
import Search from "../../components/home/search";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
import Products from "../../components/home/products";

const FrontPage = ( props ) => {

	const {
		      pageContext: {
		      	 allProducts,
			      postSearchData: { allPosts, options }
		      }
	      } = props;

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<Search posts={ allPosts } engine={ options }/>
						<Products products={ allProducts }/>
					</>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default FrontPage;

