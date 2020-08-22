import React from 'react';
import { useQuery } from "@apollo/client";
import { isEmpty } from 'lodash';
import GET_CUSTOMER_ADDRESS from "../../../queries/get-customer-address";

const Addresses = ( { authData } ) => {

	const { user: { id } } = authData;

	// Get Cart Data.
	const { data } = useQuery(GET_CUSTOMER_ADDRESS, {
		variables: {
			id: id
		},
	});

	if ( isEmpty( data ) ) {
		return null;
	}

	const { customer: { billing, shipping } } = data;

	return (
		<div className="addresses">
			{ ! isEmpty( billing ) ? (
				<div className="billing-address">
					<h4>Billing Address</h4>
					{ ! isEmpty( billing.address1 ) ? <p>{ billing.address1 }</p> : null }
					{ ! isEmpty( billing.address2 ) ? <p>{ billing.address2 }</p> : null }
					{ ! isEmpty( billing.city ) ? <p>{ billing.city }</p> : null }
					{ ! isEmpty( billing.state ) ? <p>{ billing.state }</p> : null }
					{ ! isEmpty( billing.country ) ? <p>{ billing.country }</p> : null }
				</div>
			) : null }
			{ ! isEmpty( shipping ) ? (
				<div className="shipping-address">
					<h4>Shipping Address</h4>
					{ ! isEmpty( shipping.address1 ) ? <p>{ shipping.address1 }</p> : null }
					{ ! isEmpty( shipping.address2 ) ? <p>{ shipping.address2 }</p> : null }
					{ ! isEmpty( shipping.city ) ? <p>{ shipping.city }</p> : null }
					{ ! isEmpty( shipping.state ) ? <p>{ shipping.state }</p> : null }
					{ ! isEmpty( shipping.country ) ? <p>{ shipping.country }</p> : null }
				</div>
			) : null }
		</div>
	)
};

export default Addresses;
