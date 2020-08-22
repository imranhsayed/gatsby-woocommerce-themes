import React, { useState } from 'react';
import './style.scss';
import Dashboard from "./dashboard";
import { isUserLoggedIn } from "../../utils/functions";

const auth = isUserLoggedIn();

const tabItems = [
	{
		id: 1,
		title: 'Dashboard',
		icon: 'tabitem__icon tab-dashboard',
		content: <Dashboard authData={ auth }/>,
	},
	{
		id: 2,
		title: 'Orders',
		icon: 'tabitem__icon tab-users',
		content: 'step 2 content',
	},
	{
		id: 3,
		title: 'Addresses',
		icon: 'tabitem__icon tab-addresses',
		content: 'step 3 content',
	},
	{
		id: 4,
		title: 'Account Details',
		icon: 'tabitem__icon tab-account-details',
		content: 'step 4 content',
	},
	{
		id: 5,
		title: 'Logout',
		icon: 'tabitem__icon tab-logout',
		content: 'step 4 content',
	},
];

const TabItemComponent = (
	{
		icon = '',
		title = '',
		onItemClicked = () => console.error( 'You passed no action to the component' ),
		isActive = false,
	}
) => {
	return (
		<div className={ isActive ? 'tabitem' : 'tabitem tabitem--inactive' } onClick={ onItemClicked }>
			<i className={ icon }/>
			<p className="tabitem__title">{ title }</p>
		</div>
	)
};

const CustomerAccount = ( { authData } ) => {

	const [active, setActive] = useState( 0 );

	console.warn( 'authData', authData );

	return (
		<div className="wrapper">
			<div className="tabs">
				{ tabItems.map( ( { id, icon, title } ) =>
					<TabItemComponent
						key={ title }
						icon={ icon }
						title={ title }
						onItemClicked={ () => setActive( id ) }
						isActive={ active === id }
					/>
				) }
			</div>
			<div className="content">
				{ tabItems.map( ( { id, content } ) => {
					return active === id ? <div key={ id }>{ content }</div> : ''
				} ) }
			</div>
		</div>
	)
};

export default CustomerAccount;
