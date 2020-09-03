import React from 'react';
import Link from 'gatsby-link';
import { sanitize } from "../../../utils/functions";

const CheckoutError = ({ requestError }) => {

	let errorMsg = <div className=" alert alert-info mt-2" dangerouslySetInnerHTML={{ __html: sanitize( requestError ) }}/>;

	if ( 'An account is already registered with your email address. <a href="#" class="showlogin">Please log in.</a>' === requestError ) {
		errorMsg = (
			<div className=" alert alert-danger mt-2">
				<span>An account is already registered with your email address. Please </span>
				<Link to="/my-account">login</Link>
			</div>
		)
	}

	return errorMsg;

};

export default CheckoutError;
