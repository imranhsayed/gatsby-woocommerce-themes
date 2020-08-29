require('dotenv').config();

module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using and other configs.
		{
		resolve: "gatsby-woocommerce-theme",
		options: {
			wordPressUrl: `${ process.env.WORDPRESS_SITE_URL }`,
			gatsbySiteUrl: `${ process.env.GATSBY_SITE_URL }`,
			googleTagManagerId: `${ process.env.GOOGLE_TAGMANAGER_ID }`
		}
	} ]
};
