## 🎨 [Gatsby WooCommerce themes - Electra](https://gatsby-woocommerce-theme.netlify.app/)
[![Project Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![Stars](https://img.shields.io/github/stars/imranhsayed/gatsby-woocommerce-themes?label=%E2%AD%90%20Stars)
![Forks](https://img.shields.io/github/forks/imranhsayed/gatsby-woocommerce-themes?color=%23ff69b4)
![Contributors](https://img.shields.io/github/contributors/imranhsayed/gatsby-woocommerce-themes?color=blue)
![Follow](https://img.shields.io/github/followers/imranhsayed?label=Please%20follow%20%20to%20support%20my%20work%20%F0%9F%99%8F&style=social)

- A Gatsby theme for WooCommerce, using Decoupled Architecture
- Front end in React
- Backend in WordPress.

[Demo Site](https://gatsby-woocommerce-theme.netlify.app/)

This theme uses `gatsby-source-wordpress@v4 BETA`

*** 👨‍💻 Please star my repo to support my work 🙏 ***

<a href="https://youtu.be/ygaE8ZdPEX8" target="_blank">
<img src="https://codeytek.com/wp-content/uploads/2020/09/Screenshot-2020-09-09-at-11.05.27-PM.png" alt="gatsby woocommerce theme electra hero image" />
</a>

## 🔥 Features
1. Uses React with Gatsby ( Blazing Fast )
2. PWA ( Works Offline )
3. Image Optimization ( blur effect )
4. GraphQL ( with wp-graphql on WordPress )
5. Custom Widgets, Menus, Social elements.
6. WooCommerce store
7. Google Analytics feature
8. Yoast SEO supported ( with og tags )
9.  Product Search with pagination ( even works offline ) 
10. Product pagination
11. Archive pages.
12. Authentication with JWT
13. My Account page ( with Login and Registration )
14. Create an account on checkout.
15. Social share.
16. Product Carousel.
17. Add to wishlist( even works offline )

## 👨‍💻 Maintainer

| Name                                                   | Github Username |
|--------------------------------------------------------|-----------------|
| [Imran Sayed](mailto:codeytek.academy@gmail.com)       |  @imranhsayed   |

## 🚀 Set Up

### Gatsby Site Setup

1. Installation: 
`npm i gatsby-woocommerce-theme`


2. Server Side Environmnent Variables.
Add the following configuration to your `gatsby-config.js` 
 
```shell script
module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using and other configs.
		{
		resolve: "gatsby-woocommerce-theme",
		options: {
			wordPressUrl: 'https://example.com',
			gatsbySiteUrl: 'https://example.com',
			googleTagManagerId: 'xxxx',
			fbAppId: 'xxxx'
		}
	} ]
};

```

2. Client Side Environment Variables.
Create two more files called `.env.development` `.env.production` and into 'site' directory or the root of your project and add your WordPress site url liks so.

```shell script
GATSBY_WORDPRESS_SITE_URL=https://example.com
``` 

Env variables from these file will be consumed by Apollo client on client side.

### WordPress Setup
1. On your WordPress site, download, Upload and activate all the plugins from wordpress/plugins folder of this repo, into your WordPress Site.

a. [Headless CMS](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/headless-cms.zip)

b. [woocommerce](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/woocommerce.4.4.1.zip)

c. [wp-graphql](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql.zip) - tested on ( v1.0.0 )

d. [wp-graphiql](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphiql.zip)

e. [wp-graphql-woocommerce](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql-woocommerce.zip)

f. [wp-gatsby](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-gatsby.zip)

g. [Yoast-SEO](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wordpress-seo.14.5.zip)

h. [wp-graphql-yoast-seo](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql-yoast-seo.zip)

i. [wp-graphql-jwt-authentication](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql-jwt-authentication.zip)

* You can follow the readme to setup [https://github.com/wp-graphql/wp-graphql-jwt-authentication#install-activate--setup](https://github.com/wp-graphql/wp-graphql-jwt-authentication#install-activate--setup)


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
6. Setup WooCommerce:
* Make sure WooCommerce Plugin is active in WordPress and the payment modes have been set from its settings.
* You can also import default wooCommerce products that come with wooCommerce Plugin for development ( if you don't have any products in your WordPress install ) `WP Dashboard > Tools > Import > WooCommerce products(CSV)`: The WooCommerce default products csv file is available at wp-content/plugins/woocommerce/sample-data/sample_products.csv

7. For home page carousel please upload same size product category images of dimensions `1900x600` 
