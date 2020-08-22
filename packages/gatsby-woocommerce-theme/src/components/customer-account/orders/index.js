import React from 'react';
import { useQuery } from "@apollo/client";
import GET_CUSTOMER_ORDER from "../../../queries/get-customer-orders";
import { isEmpty } from 'lodash';
import { getFormattedDate } from "../../../utils/functions";

const Orders = ( { authData } ) => {

	const { user: { id } } = authData;


	// Get Cart Data.
	const { data } = useQuery(GET_CUSTOMER_ORDER, {
		variables: {
			id: id
		},
	});

	if ( isEmpty( data ) ) {
		return null;
	}

	console.warn( 'data', data );
	const { customer: { orders } } = data;

	return (
		<div className="dashboard">
			{ ! isEmpty( orders ) ? orders.edges.map( order => {
				return (
					<div className="order" key={ order.node.orderId }>
						<h4>#{ order.node.orderId }</h4>
						<time>Date: { getFormattedDate( order.node.date ) }</time>
						<div>Payment Method: { order.node.paymentMethodTitle }</div>
						<div>Order Status: { order.node.status }</div>
						<div>Order Total: { order.node.total }</div>

						{ order.node.lineItems.edges.map( ( item ) => {
							return (
								<div className="order-item" key={item.node.product.id}>
									<h5>{ item.node.product.name }</h5>
								</div>
							)
						} ) }
						<hr/>
					</div>
				)
			} ) : null }
		</div>
	)
};

export default Orders;
