import React, { useState } from 'react';
import './style.scss';
import Dashboard from "./dashboard";
import Orders from "./orders";
import { isUserLoggedIn } from "../../utils/functions";
import Logout from "./logout";
import Addresses from "./addresses";
import AccountDetails from "./account-details";

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
		content: <Orders authData={ auth }/>,
	},
	{
		id: 3,
		title: 'Addresses',
		icon: 'tabitem__icon tab-addresses',
		content: <Addresses authData={ auth }/>,
	},
	{
		id: 4,
		title: 'Account Details',
		icon: 'tabitem__icon tab-account-details',
		content: <AccountDetails authData={ auth }/>,
	},
	{
		id: 5,
		title: 'Logout',
		icon: 'tabitem__icon tab-logout',
		content: null,
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

const CustomerAccount = ( { handleLogout } ) => {

	const [active, setActive] = useState( 0 );

	return (
		<div className="wrapper">
			<div className="tabs">
				{ tabItems.map( ( { id, icon, title } ) => ( 5 === id ) ? (
					<Logout handleLogout={ handleLogout }/>
				) : (
					<TabItemComponent
						key={ title }
						icon={ icon }
						title={ title }
						onItemClicked={ () => setActive( id ) }
						isActive={ active === id }
					/>
					)

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
