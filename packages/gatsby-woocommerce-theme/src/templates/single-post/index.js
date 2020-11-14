import React from "react";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { getOgImage } from "../../utils/functions";
import SinglePost from "../../components/single-post";

const SinglePostTemplate = ( props ) => {

	const { pageContext: { title, seo, uri } } = props;

	return (
		<Layout>
			{
				!isEmpty( props.pageContext ) ? (
					<>
						<SEO
							title={ title }
							seoData={ seo }
							uri={ uri }
							header={ { siteTitle: 'Gatsby WooCommerce Theme' } }
							openGraphImage={ getOgImage( seo ) }
						/>
						<SinglePost data={ props.pageContext }/>
					</>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default SinglePostTemplate;

