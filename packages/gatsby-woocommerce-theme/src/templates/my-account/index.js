import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout";
import Login from "../../components/login";
import Register from "../../components/register";
import { isEmpty, isUserLoggedIn, logOut } from "../../utils/functions";

const MyAccount = () => {

	const [loggedIn, setLoggedIn] = useState( false );

	useEffect( () => {

		const auth = isUserLoggedIn();

		if ( !isEmpty( auth ) ) {
			setLoggedIn( true );
		}

	}, [loggedIn] );

	const handleLogout = () => {
		logOut();
		setLoggedIn( false );
	};

	return (
		<Layout>
			{ !loggedIn ? (
				<div className="row">
					<Login setLoggedIn={ setLoggedIn }/>
					<Register setLoggedIn={ setLoggedIn }/>
				</div>
			) : (
				<div>
					<h3>Logged In</h3>
					<button onClick={ handleLogout }>Log out</button>
				</div>
			) }

		</Layout>
	)
};

export default MyAccount;
