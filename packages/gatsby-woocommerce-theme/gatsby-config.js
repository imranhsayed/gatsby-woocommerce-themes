module.exports = ({ wordPressUrl }) => ({
	siteMetadata: {
		title: `Gatsby WooCommerce Theme`,
		description: `Gatsby WooCommerce Theme`,
		author: `@imranhsayed`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-wordpress-experimental`,
			options: {
				url: `${ wordPressUrl }/graphql`,
				verbose: true,
				develop: {
					hardCacheMediaFiles: true,
				},
				debug: {
					graphql: {
						writeQueriesToDisk: true,
					},
				},
				type: {
					Post: {
						limit:
							process.env.NODE_ENV === `development`
								? // Lets just pull 50 posts in development to make it easy on ourselves.
								50
								: // and we don't actually need more than 5000 in production for this particular site
								5000,
					},
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby WordPress Theme`,
				short_name: `Phoenix`,
				start_url: `/`,
				background_color: `#eaeaea`,
				theme_color: `#1e5663`,
				display: `minimal-ui`,
				icon: `${__dirname}/src/images/favicon.png`, // For favicon- This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
})
