require('dotenv').config();

module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using.
		{
		resolve: "gatsby-woocommerce-theme",
		options: {
			wordPressUrl: `${ process.env.SITE_URL }`
		}
	} ]
};
