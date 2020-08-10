
/**
 * External dependencies.
 */
import React from 'react';
import { ApolloProvider } from '@apollo/client';

/**
 * Internal dependencies.
 */
import client from './client';

/**
 * Root Element which is a wrapper to the app.
 *
 * @param {Object} element App element.
 *
 * @return {*}
 */
export const wrapRootElement = ( { element } ) => (
	<ApolloProvider client={ client }>{ element }</ApolloProvider>
);
