import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import GET_PRODUCTS from "../../../queries/get-products";
import { getFormattedCart, getWishListProducts } from "../../../utils/functions";
import { isEmpty } from "lodash";
const Products = () => {

	const [ products, setProducts ] = useState( null );
	const wishListProducts = getWishListProducts();
	const productIds = ! isEmpty( wishListProducts ) ? wishListProducts.productIds : [];

	// Get Cart Data.
	const { data } = useQuery( GET_PRODUCTS, {
		variables: {
			include: productIds
		},
		notifyOnNetworkStatusChange: true,
		onCompleted: ( data ) => {
			setProducts( data );
		},
	});

	console.warn(  'dd', products );

	return null;

	return (
			<div className="container my-5">
				<h1 className="mt-5 mb-4">Wishlist</h1>
			</div>
	)
}

export default Products;
