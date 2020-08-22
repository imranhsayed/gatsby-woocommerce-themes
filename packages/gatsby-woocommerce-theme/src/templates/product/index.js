import React from "react";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
import SingleProduct from "../../components/single-product";

const SingleProductPage = ( props ) => {

	const { product } = props.pageContext;

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<SingleProduct product={product}/>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default SingleProductPage;

