import React from "react";
import Search from "../../components/home/search";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";

const ArchivePage = ( props ) => {

	const {
		      pageContext: {
			      categories,
			      category,
			      postSearchData: { products, options }
		      }
	      } = props;

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<Search
							products={ products }
							initialProducts={ category.products.nodes }
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
export default ArchivePage;

