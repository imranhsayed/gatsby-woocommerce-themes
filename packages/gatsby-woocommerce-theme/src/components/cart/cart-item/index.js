import React, { useState } from 'react';
import { v4 } from "uuid";
import { getUpdatedItems } from "../../../utils/functions";

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

			if ( ! isEmpty( type ) ) {
				newQty = 'increment' === type ? productCount + 1 : productCount -1;
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
		<tr className="woo-next-cart-item" key={ item.productId }>
			<th className="woo-next-cart-element woo-next-cart-el-close">
				{/* Remove item */}
				{ /* eslint-disable */ }
				<span className="woo-next-cart-close-icon"
				      onClick={ ( event ) => handleRemoveProductClick( event, item.cartKey, products ) }>
					<i className="cart-close">✖</i>
				</span>
			</th>
			<td className="woo-next-cart-element">
				<img width="64" src={ item.image.sourceUrl } srcSet={ item.image.srcSet } alt={ item.image.title }/>
			</td>
			<td className="woo-next-cart-element">{ item.name }</td>
			<td className="woo-next-cart-element">{ ( 'string' !== typeof item.price ) ? item.price.toFixed( 2 ) : item.price }</td>

			{/* Qty Input */ }
			<td className="woo-next-cart-element woo-next-cart-qty" >
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<button className="increment-btn" onClick={( event ) => handleQtyChange( event, item.cartKey, 'decrement' )} >-</button>
					<input
						type="number"
						min="1"
						style={{ textAlign: 'center', width: '60px', margin: '0 8px 0 8px' }}
						data-cart-key={ item.cartKey }
						className={ `woo-next-cart-qty-input form-control ${ updateCartProcessing ? 'woo-next-cart-disabled' : '' } ` }
						value={ productCount }
						onChange={ ( event ) => handleQtyChange( event, item.cartKey, '' ) }
					/>
					<button className="decrement-btn" onClick={( event ) => handleQtyChange( event, item.cartKey, 'increment' )}>+</button>
					{ updateCartProcessing ?
						<img className="woo-next-cart-item-spinner" src={ cartSpinnerGif } alt="spinner"/> : '' }
				</div>
			</td>
			<td className="woo-next-cart-element">{ ( 'string' !== typeof item.totalPrice ) ? item.totalPrice.toFixed( 2 ) : item.totalPrice }</td>
		</tr>
	)
};

export default CartItem;
