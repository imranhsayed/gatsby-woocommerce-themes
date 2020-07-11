## 🎨 Gatsby WooCommerce theme
[![Project Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A Gatsby WooCommerce theme for WordPress, using Decoupled Architecture.
Front end in React.
Backend in WordPress.

This theme uses `gatsby-source-wordpress@v4 BETA`

*** 👨‍💻 Please star my repo to support my work 🙏 ***

## 🔥 Features
1. Uses React with Gatsby ( Blazing Fast )
2. PWA ( Works Offline )
3. Image Optimization ( blur effect )
4. GraphQL ( with wp-graphql on WordPress )
5. Custom Widgets, Menus
6. WooCommerce store
7. Google Analytics feature
8. Yoast SEO supported.


## 👨‍💻 Maintainer

| Name                                                   | Github Username |
|--------------------------------------------------------|-----------------|
| [Imran Sayed](mailto:codeytek.academy@gmail.com)       |  @imranhsayed   |

## 🚀 Set Up

### Gatsby Site Setup

1. Installation: 
`npm i gatsby-wordpress-theme-phoenix`

2. Add the following configuration to your `gatsby-config.js` and put wordPressUrl, gatsbySiteUrl and googleTagManagerId.

```javascript
module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using.
		{
		resolve: "gatsby-woocommerce-theme",
		options: {
			wordPressUrl: 'https://example.com',
			gatsbySiteUrl: `https://example.com`,
			googleTagManagerId: `xxxx`
		}
	} ]
};
``` 

### WordPress Site Setup

1. Download, Upload and activate all the plugins from wordpress/plugins folder of this repo, into your WordPress Site.

a. [Headless CMS](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/headless-cms.zip)
b. [wp-graphql](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql.zip) - tested on ( v1.0.0 )
c. [wp-graphiql](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphiql.zip)
d. [wp-graphql-woocommerce](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql-woocommerce.zip)
e. [wp-gatsby](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-gatsby.zip)
f. [Yoast-SEO](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wordpress-seo.14.5.zip)
g. [wp-graphql-yoast-seo](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql-yoast-seo.zip)

2. 
   * Set Header menu as `HCMS Header Menu`
   
   <a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
   <img src="https://codeytek.com/wp-content/uploads/2020/06/header-menu-demo.png" alt="Header Menu Demo" />
   </a>
   
   * Set Footer menu as `HCMS Footer Menu`.
   
      <a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
      <img src="https://codeytek.com/wp-content/uploads/2020/06/footer-menu-demo.png" alt="Footer menu demo" />
      </a>
   
3. You can also set text widgets in #HCMS Footer #1 and #HCMS Footer #2 under Appearance  > Widgets in WordPress.
4. Create a Home Page ( if there isn't one already )and make sure you have a home page and Location rule is set to Home page.

5. If isn't already set your site title, description and logo from WordPress customizer.
