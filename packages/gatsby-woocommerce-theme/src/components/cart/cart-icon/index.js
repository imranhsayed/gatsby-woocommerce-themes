import React, { useContext } from 'react';
import { AppContext } from "./../../context/AppContext";
import Link from 'gatsby-link';
import './style.scss';

const CartIcon = () => {

	const [ cart ] = useContext( AppContext );
	console.warn( 'cart', cart );
	const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
	const totalPrice = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsPrice : '';

	return (
		<>
			<Link to="/cart">
					<div className="woo-next-cart-wrap">
						{ totalPrice ? <span className="woo-next-cart-price mr-2">{ totalPrice }</span> : '' }
						<span className="woo-next-cart-icon-container">
							🛒
							{ productsCount ? <span className="woo-next-cart-count">{ productsCount }</span> : '' }
						</span>
					</div>
			</Link>
		</>

	)
};

export default CartIcon;
