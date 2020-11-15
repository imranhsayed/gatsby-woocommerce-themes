
const { slash } = require( `gatsby-core-utils` );
const customTemplatesUris = [ '/'  ];
const customTemplateSlugs = [ 'checkout', 'cart', 'my-account', 'products' ];
const singlePostTemplate = require.resolve(`../src/templates/single-post/index.js`);
const { ImageFragment } = require('./fragements/image/index');
const { SeoFragment } = require('./fragements/seo/index.js');

// Get all the posts.
const GET_POSTS = `
query GET_POSTS {
  posts: allWpPost(limit: 5000) {
    nodes {
      id
      title
      content
      date
      uri
      slug
      seo {
        ...SeoFragment
      }
      featuredImage {
        node {
		  ...ImageFragment
        }
      }
    }
  }
  categories: allWpProductCategory(limit: 5) {
    nodes {
      id
      name
      uri
    }
  }
}
${ ImageFragment }
${ SeoFragment }
`;

module.exports = async ( { actions, graphql } ) => {

    const { createPage } = actions;

    const fetchPosts = async () => {

        // Do query to get all posts, this will return the posts and pages.
        return await graphql( GET_POSTS )
            .then( ( { data } ) => {

                const { posts, categories } = data;

                return { posts: posts.nodes, categoriesData: categories.nodes };
            } );
    };

    // When the above fetchPosts is resolved, then loop through the results i.e posts to create single post pages.
    await fetchPosts().then( ( { posts, categoriesData } ) => {

        // 2. Create Single POST PAGE: Loop through all pages and create single page for post.
        posts &&
        posts.map( ( post ) => {

            // If its not a custom template, create the page.
            if ( ! customTemplatesUris.includes( post.uri ) &&! customTemplateSlugs.includes( post.slug )  ) {

                createPage( {
                    path: `${ post.uri }`,
                    component: slash( singlePostTemplate ),
                    context: { ...post, categoriesData }, // pass single page data in context, so its available in the singlePostTemplate in props.pageContext.
                } );

            }

        } );

    } )

};
