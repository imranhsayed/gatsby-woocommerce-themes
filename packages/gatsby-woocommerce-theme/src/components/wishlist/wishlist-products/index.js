import React, { useEffect, useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import GET_PRODUCTS from "../../../queries/get-products";
import { addWishListToLocalStorage, getWishListProducts } from "../../../utils/functions";
import { isEmpty } from "lodash";
import WishlistProduct from "../wishlist-product";

const WishlistProducts = ({ setWishList }) => {
	/**
	 * We get the product data from localStorage first and set it to the 'products' initial value
	 * so that it can be used even when offline.
	 */
	const wishListProducts = getWishListProducts();
	const [ products, setProducts ] = useState( wishListProducts.products );
	const productIds = ! isEmpty( wishListProducts ) ? wishListProducts.productIds : [];

	// Get Cart Data.
	const [getWishList, { loading }] = useLazyQuery( GET_PRODUCTS, {
		variables: {
			include: productIds
		},
		notifyOnNetworkStatusChange: true,
		onCompleted: ( data ) => {

			// If the request is sucessfull updated products with fresh data
			if ( ! isEmpty( data.products.edges ) ) {
				setProducts( data.products.edges );

				// Update the localStorage with fresh data( this is will ensure data is not stale ).
				addWishListToLocalStorage({
					productIds: productIds,
					products: data.products.edges
				})
			}
		},
		onError: () => {
			const prod = getWishListProducts()
			setProducts(prod)
		}
	});

	useEffect(() => {
		getWishList()
	}, [])

	if ( undefined === products.length ) {
		return null;
	}

	return (
			<div className="container my-5">
				<div className="container">
					<div className="product-container row">
						{!loading && !isEmpty( products ) && products.length && products.map((product) => {
							return (
								<WishlistProduct
									key={product.node.id}
									product={product.node}
									getWishList={ getWishList }
									setWishList={ setWishList }
								/>
							)
						})}
						{ loading && <span>Loading...</span> }
					</div>
				</div>
			</div>
	)
}

export default WishlistProducts;
