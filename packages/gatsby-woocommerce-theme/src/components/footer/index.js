// /**
//  * External dependencies.
//  */
// import React from 'react';
// import { graphql, StaticQuery } from "gatsby";
//
// /**
//  * Internal dependencies.
//  */
// import './style.scss';
// import { Footer } from "./footer-static";
//
// /**
//  * This is default Component Export.
//  *
//  * @return {*}
//  */
// export default () => {
//
// 	return (
// 		<StaticQuery
// 			query={ graphql`
// 				    query FooterQuery {
// 				        HWGraphQL {
// 						    footer: getFooter {
// 						      copyrightText
// 						      sidebarOne
// 						      sidebarTwo
// 						      socialLinks {
// 						        iconUrl
// 						        iconName
// 						      }
// 						    }
// 						    footerMenuItems: menuItems(where: {location: HCMS_MENU_FOOTER}) {
// 						      edges {
// 						        node {
// 						          id
// 						          menuItemId
// 						          label
// 						          url
// 						          childItems {
// 						            edges {
// 						              node {
// 						                menuItemId
// 						                label
// 						                url
// 						                id
// 						              }
// 						            }
// 						          }
// 						        }
// 						      }
// 						    }
// 				        }
// 				    }
// 				` }
// 			render={ data => <Footer data={ data }/> }
// 		/>
// 	)
// }
