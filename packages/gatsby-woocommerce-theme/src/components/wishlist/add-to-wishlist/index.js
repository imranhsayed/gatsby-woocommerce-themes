import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { addToWishList, isProductInWishList } from "../../../utils/functions";
import Link from "gatsby-link";
import './style.scss'

const AddToWishList = ( { product } ) => {

	const [ isInWishList, setInWishList ] = useState( false );

	useEffect( () => {
		const isItemInWishList = isProductInWishList( product.productId );
		setInWishList( isItemInWishList );
	}, [ isInWishList ] )

	if ( isEmpty( product ) ) {
		return null;
	}

	const handleAddToWishList = () => {

		const productData = {
			externalUrl: ! isEmpty( product.externalUrl ) ? product.externalUrl : '',
			productId: product.productId
		}
		addToWishList( productData );
		setInWishList( true );
	}
return (
	<div>
		{ ! isInWishList ? (
			<button onClick={ handleAddToWishList } className="wishlist-btn btn btn-outline-dark -mt-2">
				<i className="heart-icon"><span className="heart"/></i> Add to Wishlist
			</button>
		) : (
			<Link to="/wishlist">
				<button className="wishlist-btn woo-next-view-cart-btn btn btn-dark">
					<i className="heart-icon"><span className="heart added"/></i> View WishList
				</button>
			</Link>
		)}
	</div>
)
};

export default AddToWishList;
