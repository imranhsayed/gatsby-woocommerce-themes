## 🎨 Gatsby WooCommerce theme
[![Project Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A Gatsby theme for WordPress, using Decoupled Architecture.
Front end in React.
Backend in WordPress.

<a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
<img src="https://codeytek.com/woo/wp-content/uploads/2020/06/Phoenix.jpg" alt="gatsby theme phoenix hero image" />
</a>

### [Video Demo](https://youtu.be/nYXL1KKjKrc)

*** 👨‍💻 Please star my repo to support my work 🙏 ***

## 🔥 Features
1. Uses React with Gatsby ( Blazing Fast )
2. PWA ( Works Offline )
3. Image Optimization ( blur effect )
4. ACF
5. GraphQL ( with wp-graphql on WordPress )
6. Blog Page with Pagination
7. Offline Search Feature
8. Categories, Archive Page, Custom Home Page
9. Custom Widgets, Menus
10. WooCommerce store
11. Google Analytics feature
12. Sitemap
13. Robot.txt
14. Yoast SEO supported.


## 👨‍💻 Maintainer

| Name                                                   | Github Username |
|--------------------------------------------------------|-----------------|
| [Imran Sayed](mailto:codeytek.academy@gmail.com)       |  @imranhsayed   |



## 🌐 Live Demo

- [Demo on Netlify](https://gatsby-wordpress-theme-phoenix.netlify.app)
- [Demo on Vercel](https://gatsby-wordpress-themes.imranhsayed.now.sh/)

<a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
<img src="https://codeytek.com/wp-content/uploads/2020/06/home-page-demo.png" alt="gatsby theme phoenix demo" />
</a>

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
		resolve: "gatsby-wordpress-theme-phoenix",
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
4. Import all the ACF data from `wordpress/acf-data` json file of this repo, into WordPress by going to WordPress Dashboard > Custom Fields > Tools > Import
5. Create a Home Page ( if there isn't one already )and make sure you have a home page and Location rule is set to Home page.


<a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
<img src="https://codeytek.com/wp-content/uploads/2020/06/acf-home-screenshot.png" alt="ACF menu screenshot" />
</a>

6. Add the ACF required data on the Home page from WordPress Dashboard. 
7. If isn't already set your site title, description and logo from WordPress customizer.
