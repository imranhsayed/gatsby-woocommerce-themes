/**
 * External dependencies.
 */
import React from 'react';
import { Footer } from "../footer-static";
import data from './footer-data';

/**
 * Internal dependencies.
 */
import './../style.scss';

export default {
	title: 'Components/Footer',
	component: Footer
};

export const footer = () => (
	<Footer data={ data }/>
);
