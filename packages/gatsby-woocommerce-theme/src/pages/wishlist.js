import React from 'react';
import Layout from "../components/layout";
import Products from "../components/wishlist/products";
const WishList = () => {

	return (
		<Layout>
			<div className="container my-5">
				<h1 className="mt-5 mb-4">Wishlist</h1>
				<Products/>
			</div>
		</Layout>
	)
}

export default WishList;
