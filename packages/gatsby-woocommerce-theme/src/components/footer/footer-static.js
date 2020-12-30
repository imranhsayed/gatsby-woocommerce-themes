import Link from "gatsby-link";
import { normalizePath, sanitize } from "../../utils/functions";
import FacebookIcon from "../icons/facebook-icon";
import TwitterIcon from "../icons/twitter-icon";
import InstagramIcon from "../icons/instagram-icon";
import YouTubeIcon from "../icons/youtube-icon";
import PropTypes from "prop-types";
import React from "react";

const config = require('../../../config/site');

const Footer = ( { data } ) => {
	const {
		      wp: {
			      footer: { copyrightText, socialLinks, sidebarOne, sidebarTwo },
		      },
		      footerMenuItems,
	      } = data;

	const staticSocialLink = [
		{ iconName: "facebook", iconUrl: config.facebook },
		{ iconName: "twitter", iconUrl: config.twitter },
		{ iconName: "instagram", iconUrl: config.instagram },
		{ iconName: "youtube", iconUrl: config.youtube },
	];

	const socialLinksData = socialLinks.length ? socialLinks : staticSocialLink;

	return (
		<footer className="footer">
			<div className="container">
				{/*Top section*/ }
				<div className="footer__top">
					{ sidebarOne ? (
						<div
							dangerouslySetInnerHTML={ { __html: sanitize( sidebarOne ) } }
							className="footer__sidebar-one footer-widget"
						/>
					) : null }
					{ sidebarTwo ? (
						<div
							dangerouslySetInnerHTML={ { __html: sanitize( sidebarTwo ) } }
							className="footer__sidebar-two footer-widget"
						/>
					) : null }

					{ footerMenuItems.edges.length ? (
						<div className="footer-menu-items footer-widget">
							<h2>About the site</h2>
							<ul>
								{ footerMenuItems.edges.map( ( menu ) => (
									<li key={ menu.node.databaseId }>
										<Link
											className="header-nav__menu-link"
											to={ normalizePath( menu.node.url ) }
										>
											{ menu.node.label }
										</Link>
									</li>
								) ) }
							</ul>
						</div>
					) : (
						""
					) }
				</div>

				{/*	Bottom section*/ }
				<div className="footer__bottom">
					<div className="copyright-text">
						{ copyrightText ? (
							<Link to={"/"}>© {new Date().getFullYear()}{" "}{config.company}</Link>
						) : (
							<Link to={"/"}>© {new Date().getFullYear()}{" "}{config.company}</Link>
						) }
					</div>
					{ socialLinksData.length ? (
						<ul className="social-links">
							{ socialLinksData.map( ( socialLink ) => (
								<li key={ socialLink.iconName }>
									<a href={ socialLink.iconUrl } target="_blank" rel="noreferrer">
										{ "facebook" === socialLink.iconName ? (
											<FacebookIcon/>
										) : null }
										{ "twitter" === socialLink.iconName ? <TwitterIcon/> : null }
										{ "instagram" === socialLink.iconName ? (
											<InstagramIcon/>
										) : null }
										{ "youtube" === socialLink.iconName ? <YouTubeIcon/> : null }
									</a>
								</li>
							) ) }
						</ul>
					) : null }
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	copyrightText: PropTypes.string,
};

Footer.defaultProps = {
	copyrightText: `${ new Date().getFullYear() } ${config.company}`,
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Footer };
