import React, { useState } from 'react';
import { v4 } from "uuid";
import { getUpdatedItems } from "../../../utils/functions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import cartSpinnerGif from '../../../images/cart-spinner.gif';
import './style.scss';
import isEmpty from "validator/es/lib/isEmpty";

const CartItem = ( {
	                   item,
	                   products,
	                   updateCartProcessing,
	                   handleRemoveProductClick,
	                   updateCart,
                   } ) => {

	const [productCount, setProductCount] = useState( item.qty );

	/*
	 * When user changes the qty from product input update the cart in localStorage
	 * Also update the cart in global context
	 *
	 * @param {Object} event event
	 *
	 * @return {void}
	 */
	const handleQtyChange = ( event, cartKey, type ) => {

		if ( process.browser ) {

			event.stopPropagation();
			let newQty;

			// If the previous update cart mutation request is still processing, then return.
			if ( updateCartProcessing || ( 'decrement' === type && 1 === productCount ) ) {
				return;
			}

			if ( !isEmpty( type ) ) {
				newQty = 'increment' === type ? productCount + 1 : productCount - 1;
			} else {
				// If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
				newQty = ( event.target.value ) ? parseInt( event.target.value ) : 1;
			}

			// Set the new qty in state.
			setProductCount( newQty );

			if ( products.length ) {

				const updatedItems = getUpdatedItems( products, newQty, cartKey );

				updateCart( {
					variables: {
						input: {
							clientMutationId: v4(),
							items: updatedItems
						}
					},
				} );
			}

		}
	};

	return (
		<div className="row">
			<div className="col-md-3 cart-left-col">
				<figure>
					<LazyLoadImage
						alt={item.image.title}
						src={! isEmpty( item.image.sourceUrl ) ? item.image.sourceUrl : ''} // use normal <img> attributes as props
						effect="blur"
					/>
				</figure>
			</div>

			<div className="col-md-9 cart-right-col">
				<div className="cart-product-title-wrap">
					<h2 className="cart-product-title">{ item.name }</h2>
					<button className="cart-remove-item" onClick={ ( event ) => handleRemoveProductClick( event, item.cartKey, products ) }>x</button>
				</div>

				<footer className="cart-product-footer">
					{/*Qty*/}
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<button className="increment-btn" onClick={( event ) => handleQtyChange( event, item.cartKey, 'decrement' )} >-</button>
						<input
							type="number"
							min="1"
							style={{ textAlign: 'center', width: '60px', paddingRight: '0' }}
							data-cart-key={ item.cartKey }
							className={ `woo-next-cart-qty-input form-control ${ updateCartProcessing ? 'woo-next-cart-disabled' : '' } ` }
							value={ productCount }
							onChange={ ( event ) => handleQtyChange( event, item.cartKey, '' ) }
						/>
						<button className="decrement-btn" onClick={( event ) => handleQtyChange( event, item.cartKey, 'increment' )}>+</button>
						{ updateCartProcessing ?
							<img className="woo-next-cart-item-spinner" src={ cartSpinnerGif } alt="spinner"/> : '' }
					</div>
					<div className="">
						<span className="cart-product-price">{ ( 'string' !== typeof item.price ) ? item.price.toFixed( 2 ) : item.price }</span>
						<span className="cart-total-price"> {( 'string' !== typeof item.totalPrice ) ? item.totalPrice.toFixed( 2 ) : item.totalPrice }</span>
					</div>
				</footer>
			</div>
		</div>
	)
};

export default CartItem;
