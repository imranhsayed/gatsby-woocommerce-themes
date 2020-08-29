/**
 * External dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

/**
 * Internal dependencies.
 */
import FacebookIcon from '../icons/facebook-icon';
import TwitterIcon from '../icons/twitter-icon';
import LinkedinIcon from '../icons/linkedin-icon';

import './style.scss';

/**
 * SocialShareCard Component.
 *
 */
const SocialShareCard = ( { title, sectionTitle, link } ) => {

	if ( isEmpty( sectionTitle ) ) {
		sectionTitle = 'Share this article';
	}

	if ( isEmpty( link ) ) {
		link = 'undefined' !== typeof window ? window.location.href : '';
	}

	const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${ encodeURIComponent( link ) }&title=${ encodeURIComponent( title ) }`;
	const twitterLink = `https://twitter.com/intent/tweet?url=${ encodeURIComponent( link ) }&text=${ encodeURIComponent( title ) }`;
	const facebookLink = `https://www.facebook.com/sharer.php?u=${ encodeURIComponent( link ) }&title=${ encodeURIComponent( title ) }`;

	return (
		<div className="social-share">
			<h6 className="social-share__title">{ sectionTitle }</h6>
			<ul>
				<li>
					<a className="social-share__linkedin" target="_blank" rel="noopener noreferrer" href={ linkedinLink }>
						<LinkedinIcon />
					</a>
				</li>
				<li>
					<a className="social-share__twitter" target="_blank" rel="noopener noreferrer" href={ twitterLink }>
						<TwitterIcon />
					</a>
				</li>
				<li>
					<a className="social-share__facebook" target="_blank" rel="noopener noreferrer" href={ facebookLink }>
						<FacebookIcon />
					</a>
				</li>
			</ul>
		</div>
	);
};

SocialShareCard.propTypes = {
	title: PropTypes.string,
	sectionTitle: PropTypes.string,
};

SocialShareCard.defaultProps = {
	title: '',
	sectionTitle: '',
};

export default SocialShareCard;
