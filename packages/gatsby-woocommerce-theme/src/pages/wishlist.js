import React, { useState } from 'react';
import Layout from "../components/layout";
import WishlistProducts from "../components/wishlist/wishlist-products";
import { getWishListProducts } from "../utils/functions";
import { isEmpty } from "lodash";
import Link from 'gatsby-link';

const WishList = () => {


	const [ wishList, setWishList ] = useState( getWishListProducts() );

	return (
		<Layout>
			<div className="container my-5">
				<h1 className="mt-5 mb-4">Wishlist</h1>
				{
					!isEmpty( wishList ) && wishList.productIds.length ?
						<WishlistProducts setWishList={ setWishList }/> :
						<>
							<p>No items in wishlist</p>
							<Link to="/">
								<button className="btn btn-outline-dark">Shop</button>
							</Link>
						</>
				}
			</div>
		</Layout>
	)
}

export default WishList;
