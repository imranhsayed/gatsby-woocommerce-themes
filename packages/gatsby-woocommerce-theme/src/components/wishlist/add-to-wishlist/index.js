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
	<div className="wishlist-container">
		{/*Add ot wishlist buttnon*/}
		{ ! isInWishList ? (
			<button onClick={ handleAddToWishList } className="wishlist-btn btn -mt-2">
				<i className="heart-icon"><span className="heart"/></i>
			</button>
		) : (
			// View
			<Link to="/wishlist">
				<button className="wishlist-btn woo-next-view-cart-btn btn">
					<i className="heart-icon"><span className="heart added"/></i>
				</button>
			</Link>
		)}
	</div>
)
};

export default AddToWishList;
