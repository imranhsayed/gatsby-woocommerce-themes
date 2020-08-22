import React from 'react';
import { isEmpty } from 'lodash';

const Dashboard = ( { authData } ) => {

	if ( isEmpty( authData ) ) {
		return null;
	}

	const { user } = authData;

	return (
		<div className="dashboard">
			{
				!isEmpty( user.firstName ) || !isEmpty( user.lastName ) ?
					<p>Hello <strong>{ user.firstName } { user.lastName }!</strong></p> :
					<p>Hello <strong>{ user.username }!</strong></p>
			}
			<section>
				From your account dashboard you can view your recent orders, manage your shipping and billing addresses
			</section>
		</div>
	)
};

export default Dashboard;
