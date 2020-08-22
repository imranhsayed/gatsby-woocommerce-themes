import { gql } from "@apollo/client";

const LOGIN = gql`
    mutation LOGIN ( $input: LoginInput!) {
        login(input: $input) {
            authToken
            user {
                id
                name
            }
        }
    }
`;

export default LOGIN;
