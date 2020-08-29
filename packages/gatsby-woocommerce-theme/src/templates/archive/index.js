import React from "react";
import Search from "../../components/home/search";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
import Carousel from "../../components/home/carousel";
import SEO from "../../components/seo";
import { getOgImage } from "../../utils/functions";

const ArchivePage = ( props ) => {

	const {
		      pageContext: {
			      categories,
			      category,
			      category: { name, seo, uri  },
			      postSearchData: { products, options }
		      }
	      } = props;

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<SEO
							title={ name }
							seoData={ seo }
							uri={ uri }
							header={ { siteTitle: 'Gatsby WooCommerce Theme' } }
							openGraphImage={ getOgImage( seo ) }
						/>
						<Carousel categories={ categories }/>
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

