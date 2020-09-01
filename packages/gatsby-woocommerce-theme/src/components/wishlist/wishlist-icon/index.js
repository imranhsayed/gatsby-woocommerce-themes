/**
 * External dependencies.
 */
import React, { useEffect, useState } from 'react';
import { isEmpty } from "lodash";
import HeartIcon from "../../icons/heart-icon";
import HeartBlackIcon from "../../icons/heart-black-icon";
import Link from 'gatsby-link';

/**
 * WishlistIcon Component.
 *
 * @return {jsx}
 */
const WishListIcon = () => {
	const [wishlistCount, setWishListCount] = useState( 0 );

	useEffect( () => {
		const existingWishList = JSON.parse( localStorage.getItem( 'woo_wishlist' ) );

		if ( !isEmpty( existingWishList ) ) {
			setWishListCount( existingWishList.productIds.length );
		}
	}, [wishlistCount] );

	return (
		<Link to="/wishlist" className="wishlist-menu">
			{ ! wishlistCount ? <HeartIcon/> : <HeartBlackIcon/> }
			<span className="wishlist-count">{ wishlistCount }</span>
		</Link>
	);
}

export default WishListIcon;
