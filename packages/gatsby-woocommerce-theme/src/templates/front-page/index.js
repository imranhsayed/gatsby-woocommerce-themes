import React from "react";
import Search from "../../components/home/search";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";

const FrontPage = ( props ) => {

	const {
		      pageContext: {
			      categories,
			      category,
			      postSearchData: { products, options }
		      }
	      } = props;

	console.warn( props.pageContext );

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<Search
							products={ products }
							initialProducts={ products }
							engine={ options }
							category={ category }
							categories={ categories }
						/>
					</>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default FrontPage;

