import React, { useState } from 'react';
import MessageAlert from "../message-alert";
import cartSpinnerGif from '../../images/cart-spinner.gif';
import { isUserValidated } from "../../utils/functions";
import { isEmpty } from 'lodash';
import validateAndSanitizeRegisterForm from "../../validator/register";
import { useMutation } from "@apollo/client";
import { v4 } from "uuid";
import REGISTER_USER from "../../mutations/register";


/**
 * Register Functional Component.
 *
 * @return {object} Register form.
 */
const Register = () => {

	const [ username, setUsername ]         = useState( '' );
	const [ email, setEmail ]               = useState( '' );
	const [ password, setPassword ]         = useState( '' );
	const [ errorMessage, setErrorMessage ] = useState( '' );
	const [ successMessage, setSuccessMessage ] = useState( '' );
	const [ showAlertBar, setShowAlertBar ] = useState( true );

	// Check if the user is validated already.
	if ( process.browser ) {

		const userValidated = isUserValidated();

		// Redirect the user to My Account page if user is already validated.
		if ( ! isEmpty( userValidated )  ) {
			// @TODO
		}

	}

	/**
	 * Hide the Status bar on cross button click.
	 */
	const onCloseButtonClick = () => {
		setErrorMessage( '' );
		setShowAlertBar( false );
	};

	/**
	 * Sets client side error.
	 *
	 * Sets error data to result of our client side validation,
	 * and statusbars to true so that its visible.
	 *
	 * @param {Object} validationResult Validation result data.
	 */
	const setClientSideError = ( validationResult ) => {

		if( validationResult.errors.password ) {
			setErrorMessage( validationResult.errors.password );
		}

		if( validationResult.errors.email ) {
			setErrorMessage( validationResult.errors.email );
		}

		if( validationResult.errors.username ) {
			setErrorMessage( validationResult.errors.username );
		}

		setShowAlertBar( true );

	};

	/**
	 * Set server side error.
	 *
	 * Sets error data received as a response of our query from the server
	 * and set statusbar to true so that its visible.
	 *
	 * @param {String} error Error
	 *
	 * @return {void}
	 */
	const setServerSideError = ( error ) => {
		setErrorMessage( error );
		setShowAlertBar( true );
	};

	// Register Mutation.
	const [ register, { loading: registerLoading, error: registerError }] = useMutation( REGISTER_USER, {
		variables: {
			input: {
				clientMutationId: v4(), // Generate a unique id.,
				username,
				password,
				email
			}
		},
		onCompleted: ( data ) => {

			// If error.
			if ( ! isEmpty( registerError ) ) {
				setErrorMessage( registerError.graphQLErrors[ 0 ].message );
			}

			// const { register } = data;
			console.warn( 'register', data );
			handleRegisterSuccess();
			// const authData = {
			// 	authToken: register.authToken,
			// 	user: register.user
			// };

			// localStorage.setItem( 'auth', JSON.stringify( authData ) );
			// setLoggedIn( true );
		},
		onError: ( error ) => {
			if ( error ) {
				if ( ! isEmpty( error ) ) {
					setErrorMessage( error.graphQLErrors[ 0 ].message );
				}
			}
		}
	} );

	/**
	 * Handles user registration.
	 *
	 * @param {object} event Event Object.
	 * @param {object} registerUser registerUser function from REGISTER_USER mutation query.
	 * @return {void}
	 */
	const handleRegister = async ( event ) => {

		if ( process.browser ) {

			event.preventDefault();

			// Validation and Sanitization.
			const validationResult = validateAndSanitizeRegisterForm( { username, email, password } );

			// If the data is valid.
			if ( validationResult.isValid ) {

				setUsername( validationResult.sanitizedData.username );
				setPassword( validationResult.sanitizedData.password );
				setEmail( validationResult.sanitizedData.email );

				register();

			} else {

				setClientSideError( validationResult );

			}

		}

	};

	/**
	 * Handle Register success.
	 *
	 * @param {Object} response Response received.
	 * @return {void}
	 */
	const handleRegisterSuccess = ( response ) => {

		// Set form fields value to empty.
		setErrorMessage( '' );
		setUsername( '' );
		setPassword( '' );

		// localStorage.setItem( 'registration-success', 'yes' );

		// Add a message.
		setSuccessMessage( 'Registration Successful! . You will be redirected to login page now...' );

	};

	return (
		<div className="wd-form container mt-5 pt-5">

			{/* Title */ }
			<h2 className="mb-2">Register</h2>

			{/* Error Message */ }
			{ ( ( '' !== errorMessage ) ) ? (
				showAlertBar && (
					<MessageAlert
						message={ errorMessage }
						success={ false }
						onCloseButtonClick={ onCloseButtonClick }
					/>
				)
			) : '' }

			{ ( ( '' !== successMessage ) ) ? (
				showAlertBar && (
					<MessageAlert
						message={ successMessage }
						success={ true }
						onCloseButtonClick={ onCloseButtonClick }
					/>
				)
			) : '' }

			{/* Login Form */ }
			<form className="mt-1" onSubmit={ ( event ) => handleRegister( event ) }>

				{/* Username */ }
				<div className="form-group">
					<label className="lead mt-1" htmlFor="username">Username</label>
					<input
						type="text"
						className="form-control"
						id="username"
						placeholder="Enter username"
						value={ username }
						onChange={ ( event ) => setUsername( event.target.value ) }
					/>
				</div>

				{/* Username */ }
				<div className="form-group">
					<label className="lead mt-1" htmlFor="email">Email</label>
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="Enter email"
						value={ email }
						onChange={ ( event ) => setEmail( event.target.value ) }
					/>
				</div>

				{/* Password */ }
				<div className="form-group">
					<label className="lead mt-1" htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
						placeholder="Enter password"
						value={ password }
						onChange={ ( event ) => setPassword( event.target.value ) }
					/>
				</div>

				{/* Submit Button */ }
				<div className="form-group">
					<button className="btn btn-primary" disabled={ registerLoading ? 'disabled' : '' } type="submit">Register</button>
				</div>

				{/*	Loading */ }
				{ registerLoading ?  <img className="woo-next-cart-item-spinner" src={ cartSpinnerGif } alt="loading"/> : '' }
			</form>
		</div>
	)
};

export default Register;
