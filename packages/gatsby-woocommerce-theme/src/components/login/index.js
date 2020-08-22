
import React, { useEffect, useState } from 'react';
import cartSpinnerGif from '../../images/cart-spinner.gif';
import { isUserLoggedIn, logOut } from "../../utils/functions";
import { isEmpty } from "../../utils/functions";
import { useMutation } from '@apollo/client';
import LOGIN from "../../mutations/login";
import { v4 } from 'uuid';
import validateAndSanitizeLoginForm from "../../validator/login";

const Login = () =>  {

	const [ loginFields, setLoginFields ] = useState({
		username: '',
		password: '',
	});

	const [ errorMessage, setErrorMessage ] = useState( null );
	const [ loggedIn, setLoggedIn ] = useState( false );

	useEffect( () => {
		const auth = isUserLoggedIn();
		if ( ! isEmpty( auth ) ) {
			setLoggedIn( true );
		}

	}, [ loggedIn ] );

	// Add to Cart Mutation.
	const [ login, { loading: loginLoading, error: loginError }] = useMutation( LOGIN, {
		variables: {
			input: {
				clientMutationId: v4(), // Generate a unique id.,
				username: loginFields.username,
				password: loginFields.password
			}
		},
		onCompleted: ( data ) => {

			// If error.
			if ( ! isEmpty( loginError ) ) {
				setErrorMessage( loginError.graphQLErrors[ 0 ].message );
			}

			const { login } = data;
			const authData = {
				authToken: login.authToken,
				user: login.user
			};

			localStorage.setItem( 'auth', JSON.stringify( authData ) );
			setLoggedIn( true );
		},
		onError: ( error ) => {
			if ( error ) {
				if ( ! isEmpty( error ) ) {
					setErrorMessage( error.graphQLErrors[ 0 ].message );
				}
			}
		}
	} );

	const onFormSubmit = ( event ) => {

		event.preventDefault();
		setErrorMessage( null );

		// Validation and Sanitization.
		const validationResult = validateAndSanitizeLoginForm( { username: loginFields.username, password: loginFields.password } );

		if ( validationResult.isValid ) {
			setLoginFields({
				username: validationResult.sanitizedData.username,
				password: validationResult.sanitizedData.password
			});
			login();
		} else {
			setClientSideError( validationResult );
		}
	};

	/**
	 * Sets client side error.
	 *
	 * Sets error data to result received from our client side validation function,
	 * and statusbar to true so that its visible to show the error.
	 *
	 * @param {Object} validationResult Validation Data result.
	 */
	const setClientSideError = ( validationResult ) => {

		if( validationResult.errors.password ) {
			setErrorMessage( validationResult.errors.password );
		}

		if( validationResult.errors.username ) {
			setErrorMessage( validationResult.errors.username );
		}

	};

	const handleOnChange = ( event ) => {
		setLoginFields( { ...loginFields, [event.target.name]: event.target.value } );
	};

	const handleLogout = () => {
		logOut();
		setLoggedIn( false );
	};

	const { username, password } = loginFields;

	if ( loggedIn ) {
		return (
			<div>
				<h3>Logged In</h3>
				<button onClick={ handleLogout }>Log out</button>
			</div>
		);
	} else {
		return (
			<>
				<div style={{ height: '100vh', maxWidth: '400px', margin: '0 auto' }}>
					<h4 className="mb-4">Login</h4>
					{ ! isEmpty( errorMessage ) && <div className="alert alert-danger" dangerouslySetInnerHTML={ { __html: errorMessage } }/> }
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
						{ loginLoading && <img className="woo-next-cart-item-spinner" src={ cartSpinnerGif } alt="loading"/> }
					</form>
				</div>
			</>
		)
	}
};

export default Login;
