/**
 * External dependencies.
 */
import React from 'react';
import { Header } from '../header-static';


/**
 * Internal dependencies.
 */
import './../style.scss';
import data from './header-data';

export default {
	title: 'Components/Header',
	component: Header
};

export const header = () => <Header data={ data }/>;
