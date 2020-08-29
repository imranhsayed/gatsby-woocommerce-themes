/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { isEmpty } from 'lodash';

function SEO( { description, lang, meta, title, header: { siteTitle }, seoData, uri, openGraphImage } ) {

	const { site, wp: { seo } } = useStaticQuery(
		graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        fbAppId
                    }
                }
                wp {
                    seo {
                        webmaster {
                            googleVerify
                        }
                        social {
                            facebook {
                                defaultImage {
                                    sourceUrl
                                }
                            }
                        }
                    }
                }
            }
		`
	);

	if ( isEmpty( seoData ) ) {
		seoData = {
			title: '' ,
			metaDesc: '',
			opengraphDescription: '',
			twitterDescription: '',
			opengraphTitle: '',
			twitterTitle: '',
			opengraphImage: {
				sourceUrl: ''
			},
			twitterImage: {
				sourceUrl: ''
			}
		};
	}

	if ( ! isEmpty( seoData ) && isEmpty( seoData.title ) ) {
		seoData.title = '';
	}

	if ( ! isEmpty( seoData ) && isEmpty( seoData.metaDesc ) ) {
		seoData.metaDesc = '';
	}

	if ( ! isEmpty( seoData ) && isEmpty( seoData.opengraphDescription ) ) {
		seoData.opengraphDescription = '';
	}

	if ( ! isEmpty( seoData ) && isEmpty( seoData.twitterDescription ) ) {
		seoData.twitterDescription = '';
	}

	if ( ! isEmpty( seoData ) && isEmpty( seoData.opengraphTitle ) ) {
		seoData.opengraphTitle = '';
	}

	if ( ! isEmpty( seoData ) && isEmpty( seoData.twitterTitle ) ) {
		seoData.twitterTitle = '';
	}

	if ( ! isEmpty( seoData ) && ( isEmpty( seoData.opengraphImage ) || isEmpty( seoData.opengraphImage.sourceUrl ) ) ) {
		seoData.opengraphImage = {
			sourceUrl: ''
		};
	}

	if ( ! isEmpty( seoData ) && ( isEmpty( seoData.twitterImage ) || isEmpty( seoData.twitterImage.sourceUrl ) ) ) {
		seoData.twitterImage = {
			sourceUrl: ''
		};
	}

	const seoTitle = seoData.title || title;
	const seoDescription = seoData.metaDesc || description || site.siteMetadata.description;
	const ogDesc = seoData.opengraphDescription || seoDescription;
	const twitterDesc = seoData.twitterDescription || seoDescription;
	const ogTitle = seoData.opengraphTitle || seoTitle;
	const twitterTitle = seoData.twitterTitle || seoTitle;
	const googleVerify = seo.webmaster.googleVerify || '';
	const ogURL = `${ site.siteMetadata.siteUrl }${ uri }`;
	const fbAppId = site.siteMetadata.fbAppId;
	const canonical = `${ site.siteMetadata.siteUrl }${ uri }`;

	return (
		<Helmet
			htmlAttributes={ {
				lang,
			} }
			title={ seoTitle }
			titleTemplate={ `%s | ${ siteTitle }` }
			link={
				canonical
					? [
						{
							rel: "canonical",
							href: canonical,
						},
					]
					: []
			}
			meta={ [
				{
					name: `title`,
					content: seoTitle,
				},
				{
					name: `description`,
					content: seoDescription,
				},
				{
					property: `og:locale`,
					content: `en_US`,
				},
				{
					property: `og:url`,
					content: ogURL,
				},
				{
					property: `og:image`,
					content: openGraphImage,
				},
				{
					property: `og:site_name`,
					content: `OpenWeb`,
				},
				{
					property: `og:title`,
					content: ogTitle,
				},
				{
					property: `og:description`,
					content: ogDesc,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: twitterTitle,
				},
				{
					name: `twitter:description`,
					content: twitterDesc,
				},
				{
					name: `robots`,
					content: `index, follow`,
				},
				{
					name: `google-site-verification`,
					content: googleVerify,
				},
				{
					property: `fb:app_id`,
					content: fbAppId,
				}
			].concat( meta ) }
		/>
	);
}

SEO.defaultProps = {
	description: ``,
	lang: `en`,
	meta: [],
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf( PropTypes.object ),
	title: PropTypes.string.isRequired,
	header: PropTypes.object,
};

export default SEO;
