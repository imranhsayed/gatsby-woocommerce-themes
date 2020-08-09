import React from "react";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
import Page from "../../components/page";

const SinglePage = ( props ) => {

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<Page data={ props.pageContext }/>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default SinglePage;

