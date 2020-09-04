import React, { useContext, useState } from 'react';
import './style.scss';
import CartDropDown from "../cart-dropdown";
import { AppContext } from "../../context/AppContext";

const CartIcon = () => {

	const [ cart ] = useContext( AppContext );
	const [ isDropdownOpen, setIsDropdownOpen ] = useState( false );

	const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
	const totalPrice = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsPrice : '';

	return (
		<>
			<button className="woo-menu-cart-icon" onClick={ () => setIsDropdownOpen( ! isDropdownOpen ) }>
					<div className="woo-next-cart-wrap">
						{ totalPrice ? <span className="woo-next-cart-price mr-2">{ totalPrice }</span> : '' }
						<span className="woo-next-cart-icon-container">
							<span role="img" aria-label="cart-icon">🛒</span>
							{ productsCount ? <span className="woo-next-cart-count">{ productsCount }</span> : '' }
						</span>
					</div>
			</button>
			<CartDropDown isDropdownOpen={ isDropdownOpen }/>
		</>

	)
};

export default CartIcon;
