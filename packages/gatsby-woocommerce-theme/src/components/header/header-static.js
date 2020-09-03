import React from "react";
import Link from "gatsby-link";

/**
 * Internal dependencies.
 */
import Nav from "./nav";
import "./style.scss";
import defaultSiteLogoUrl from "../../images/logo.png";

const Header = ({ data }) => {
  const {
    wp: {
      header: { siteTitle, siteTagLine, siteLogoUrl },
    },
    headerMenuItems,
  } = data;
  const siteLogoURL = siteLogoUrl ? siteLogoUrl : defaultSiteLogoUrl;

  return (
    <header className="site-header-container container">
      <div className="site-header">
        <div className="site-brand">
          <Link to="/">
	          <figure>
		          <img
			          className="site-brand__logo"
			          src={siteLogoURL}
			          width="68"
			          height="55"
			          alt="header logo"
		          />
	          </figure>
          </Link>
          <div className="site-brand__content">
            <h2 className="screen-reader-text site-brand__title">
              {siteTitle}
            </h2>
            <p className="site-brand__description">{siteTagLine}</p>
          </div>
        </div>

        <Nav headerMenuItems={headerMenuItems} />
      </div>
    </header>
  );
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Header };
