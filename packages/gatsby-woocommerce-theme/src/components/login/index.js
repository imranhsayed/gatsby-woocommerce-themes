
import React, { useContext, useState } from 'react';
import cartSpinnerGif from '../../images/cart-spinner.gif';
import axios from 'axios';

const Login = () =>  {

	const [ store, setStore ] = useContext( AppContext );

	const [ loginFields, setLoginFields ] = useState({
		username: '',
		password: '',
		userNiceName: '',
		userEmail: '',
		loading: false,
		error: ''
	});

	const createMarkup = ( data ) => ({
		__html: data
	});

	const onFormSubmit = ( event ) => {
		event.preventDefault();

		const siteUrl = clientConfig.siteUrl;

		const loginData = {
			username: loginFields.username,
			password: loginFields.password,
		};

		setLoginFields( { ...loginFields, loading: true } );

		axios.post( `${siteUrl}/wp-json/jwt-auth/v1/token`, loginData )
			.then( res => {

				if ( undefined === res.data.token ) {
					setLoginFields( {
						...loginFields,
						error: res.data.message,
						loading: false }
					);
					return;
				}

				const { token, user_nicename, user_email } = res.data;

				localStorage.setItem( 'token', token );
				localStorage.setItem( 'userName', user_nicename );

				setStore({
					...store,
					userName: user_nicename,
					token: token
				});

				setLoginFields( {
					...loginFields,
					loading: false,
					token: token,
					userNiceName: user_nicename,
					userEmail: user_email,
				} )
			} )
			.catch( err => {
				setLoginFields( { ...loginFields, error: err.response.data.message, loading: false } );
			} )
	};

	const handleOnChange = ( event ) => {
		setLoginFields( { ...loginFields, [event.target.name]: event.target.value } );
	};


	const { username, password, userNiceName, error, loading } = loginFields;

	if ( store.token ) {
		return ( <Redirect to={`/dashboard`} noThrow /> )
	} else {
		return (
			<>
				<div style={{ height: '100vh', maxWidth: '400px', margin: '0 auto' }}>
					<h4 className="mb-4">Login</h4>
					{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ createMarkup( error ) }/> }
					<form onSubmit={ onFormSubmit }>
						<label className="form-group">
							Username:
							<input
								type="text"
								className="form-control"
								name="username"
								value={ username }
								onChange={ handleOnChange }
							/>
						</label>
						<br/>
						<label className="form-group">
							Password:
							<input
								type="password"
								className="form-control"
								name="password"
								value={ password }
								onChange={ handleOnChange }
							/>
						</label>
						<br/>
						<button className="btn btn-primary mb-3" type="submit">Login</button>
						{ loading && <img className="woo-next-cart-item-spinner" src={ cartSpinnerGif } alt="loading"/> }
					</form>
				</div>
			</>
		)
	}
};

export default Login;
