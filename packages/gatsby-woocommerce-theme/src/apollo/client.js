
/**
 * Internal dependencies.
 */
import { siteURL } from '../../client-config';
import fetch from 'isomorphic-fetch';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { isEmpty } from 'lodash';

/**
 * Middleware operation
 *
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 * If we have a auth token in localStorage, add it to the GraphQL request as a authorization header.
 */
export const middleware = new ApolloLink( ( operation, forward ) => {

	let headersData = null;

	/**
	 * If session data exist in local storage, set value as session header.
	 */
	const session = ( process.browser ) ?  localStorage.getItem( "woo-session" ) : null;

	if ( ! isEmpty( session ) ) {
		headersData = {
			"woocommerce-session": `Session ${ session }`
		};
	}

	/**
	 * If auth token exist in local storage, set value as authorization header.
	 */
	const auth = ( process.browser ) ?  JSON.parse( localStorage.getItem( "auth" ) ) : null;
	const token = ( ! isEmpty( auth ) ) ? auth.authToken : null;

	if ( ! isEmpty( token ) ) {
		headersData = {
			...headersData,
			"authorization": token ? `Bearer ${token}` : "",
		};
	}

	if ( ! isEmpty( headersData ) ) {
		operation.setContext( ( { headers = {} } ) => ( {
			headers: headersData,
		} ) );
	}

	return forward( operation );

} );

/**
 * Afterware operation.
 *
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink( ( operation, forward ) => {

	return forward( operation ).map( response => {
		/**
		 * Check for session header and update session in local storage accordingly.
		 */
		const context = operation.getContext();
		const { response: { headers } }  = context;
		const session = headers.get( "woocommerce-session" );

		if ( session ) {

			// Remove session data if session destroyed.
			if ( "false" === session ) {

				localStorage.removeItem( "woo-session" );

				// Update session new data if changed.
			} else if ( localStorage.getItem( "woo-session" ) !== session ) {

				localStorage.setItem( "woo-session", headers.get( "woocommerce-session" ) );

			}
		}

		return response;

	} );
} );

// Apollo GraphQL client.
export const client = new ApolloClient({
	link: middleware.concat( afterware.concat( createHttpLink({
		uri: `${siteURL}/graphql`,
		fetch: fetch
	}) ) ),
	cache: new InMemoryCache()
});
