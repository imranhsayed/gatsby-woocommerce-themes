/**
 * External dependencies.
 */
import React from "react";

/**
 * Internal dependencies.
 */
import './style.scss';

const themeColors = [
	{
		code: '#f8f8f8'
	},
	{
		code: '#ffffff'
	},
	{
		code: '#ccc'
	},
	{
		code: '#757575'
	},
	{
		code: '#1e5663'
	},
	{
		code: '#e98f23'
	},
	{
		code: '#000000'
	},
];

const Colors = () => (
	<div className="gb-storybook-colors">
		<ul>
			{ themeColors.map( themeColor => (
				<li key={ themeColor.code }>
					<div className="gb-storybook-colors__color" style={ { backgroundColor: themeColor.code } } />
					<div className="gb-storybook-colors__color-code">{ themeColor.code }</div>
				</li>
			) ) }
		</ul>
	</div>
);

export default {
	title: "Base Style/Colors",
	component: Colors
}

export const colors = () => (
	<Colors/>
);
