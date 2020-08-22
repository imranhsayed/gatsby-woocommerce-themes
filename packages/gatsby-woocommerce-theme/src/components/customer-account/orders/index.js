import React from 'react';
import { isEmpty } from 'lodash';

const Orders = ( { authData } ) => {

	if ( isEmpty( authData ) ) {
		return null;
	}

	return (
		<div className="dashboard">
			Orders
		</div>
	)
};

export default Orders;
