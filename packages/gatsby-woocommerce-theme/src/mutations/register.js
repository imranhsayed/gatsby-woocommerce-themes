import { gql } from "@apollo/client";

/**
 * Register user mutation query.
 */
const REGISTER_USER = gql`
    mutation RegisterUser( $input: RegisterCustomerInput! ) {
        registerCustomer( input:$input ) {
            customer {
                id
                username
                email
                jwtAuthToken
            }
        }
    }
`;

export default REGISTER_USER;
