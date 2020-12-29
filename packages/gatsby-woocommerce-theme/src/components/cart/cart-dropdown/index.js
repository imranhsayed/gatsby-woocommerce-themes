import React, { useContext } from 'react';
import './style.scss'
import { AppContext } from "../../context/AppContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { isEmpty } from "lodash";
import Link from "gatsby-link";

const CartDropDown = ({ isDropdownOpen }) => {

	const [ cart ] = useContext( AppContext );
	
	console.log( 'cart', cart );

	if ( null === cart || ! Object.keys( cart ).length ) {
		return null;
	}

	const productsCount = cart.totalProductsCount ? cart.totalProductsCount : '';
	const totalPrice = cart.totalProductsPrice ? cart.totalProductsPrice : '';

	const productImagePlaceholder = "https://via.placeholder.com/70";

	return (
		<div className={ `shopping-cart ${ isDropdownOpen ? 'is-open' : '' }` }>
			<div className="shopping-cart-header">
				<div className="cart-icon-wrp">
					<Link to="/cart">
						{/* eslint-disable */}
						<span className="cart-icon" role="img">🛒</span>
						<span className="badge">{ productsCount }</span>
					</Link>
				</div>
				<div className="shopping-cart-total">
					<span className="lighter-text">Total:</span>
					<span className="main-color-text">{ totalPrice }</span>
				</div>
			</div>
			<ul className="shopping-cart-items">
				{ cart?.products.map( product => (
					<li className="clearfix" key={ product.productId }>
						{!isEmpty(product.image) ? (
							<figure>
								<LazyLoadImage
									alt={product.image.altText ? product.image.altText : ""}
									src={product.image.sourceUrl} // use normal <img> attributes as props
									effect="blur"
									height="70"
									width="70"
								/>
							</figure>
						) : !isEmpty(productImagePlaceholder) ? (
							<figure>
								<LazyLoadImage
									alt="default"
									height="70"
									src={productImagePlaceholder}
									width="70"
									effect="blur"
								/>
							</figure>
						) : null}
						<span className="item-name">{ product.name }</span>
						<span className="item-price">{ product.totalPrice }</span>
						<span className="item-quantity">Quantity: { product.qty }</span>
					</li>
				) ) }
			</ul>
			<Link to="/checkout" className="button">Checkout</Link>
		</div>
	)
}

export default CartDropDown;
