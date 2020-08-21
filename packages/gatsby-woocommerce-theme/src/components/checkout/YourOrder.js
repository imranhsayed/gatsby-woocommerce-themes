import React from 'react';
import CheckoutCartItem from "./CheckoutCartItem";

const YourOrder = ( { cart } ) => {

	return (
		<>
			{ cart ? (
				<>
					{/*Product Listing*/}
					<table className="table table-hover">
						<thead>
						<tr className="woo-next-cart-head-container">
							<th className="woo-next-cart-heading-el"/>
							<th className="woo-next-cart-heading-el">Product</th>
							<th className="woo-next-cart-heading-el">Total</th>
						</tr>
						</thead>
						<tbody>
						{ cart.products.length && (
							cart.products.map( item => (
								<CheckoutCartItem key={ item.productId } item={ item } />
							) )
						) }
						{/*Total*/}
						<tr className="">
							<td className=""/>
							<td className="woo-next-checkout-total">Subtotal</td>
							<td className="woo-next-checkout-total">{ cart.totalProductsPrice }</td>
						</tr>
						<tr className="">
							<td className=""/>
							<td className="woo-next-checkout-total">Total</td>
							<td className="woo-next-checkout-total">{ cart.totalProductsPrice }</td>
						</tr>
						</tbody>
					</table>
				</>
			) : '' }
		</>
	)
};

export default YourOrder;
