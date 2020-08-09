const path = require( 'path' );
const createFrontPage = require( './create-pages/front-page' );
const createArchivePages = require( './create-pages/archive' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createFrontPage( { actions, graphql } );
	await createArchivePages( { actions, graphql } );
};

/**
 * Since the node_modules ( packages ) live outside the theme directory, making an alias for them.
 *
 * So Gutenberg styles can be accessed like so `@import "~@wordpress/base-styles/colors"`
 *
 * @param stage
 * @param actions
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'~': path.resolve(__dirname, '../../node_modules')
			}
		},
	})
};
