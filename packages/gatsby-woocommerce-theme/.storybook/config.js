import { action } from "@storybook/addon-actions";
import { GlobalStyle } from '../src/shared/global';
import React from 'react';

// Add viewport addon for mobile responsive development.
import { addParameters, addDecorator, configure } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

global.__BASE_PATH__ = '';

// automatically import all files ending in *.stories.js
configure( [
	require.context( "../src/components", true, /\.stories\.js$/ )
], module );

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
	enqueue: () => {
	},
	hovering: () => {
	}
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
	action( "NavigateTo:" )( pathname )
}

addParameters( {
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
} );

addDecorator(story => (
	<>
		<GlobalStyle />
		{story()}
	</>
));
