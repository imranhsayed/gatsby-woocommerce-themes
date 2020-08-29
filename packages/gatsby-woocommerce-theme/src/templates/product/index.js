import React from "react";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
import SingleProduct from "../../components/single-product";
import SEO from "../../components/seo";
import { getOgImage } from "../../utils/functions";

const SingleProductPage = ( props ) => {

	const { product, product: { name, link, seo } } = props.pageContext;

	return (
		<Layout>
			{
				!isEmpty( props.pageContext ) ? (
					<>
						<SEO
							title={ name }
							seoData={ seo }
							uri={ link }
							header={ { siteTitle: 'Gatsby WooCommerce Theme' } }
							openGraphImage={ getOgImage( seo ) }
						/>
						<SingleProduct product={ product }/>
					</>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default SingleProductPage;

