import { gql } from "@apollo/client";
const GET_CUSTOMER_ORDER = gql`
    query GET_CUSTOMER_ORDER( $customerId: Int ) {
        customer( customerId: $customerId ) {
            id
            customerId
            orders {
                edges {
                    node {
	                    id
                        orderId
                        date
                        status
                        total
                        customerNote
                        paymentMethodTitle
                        lineItems {
                            edges {
                                node {
                                    product {
                                        name
	                                    id
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default GET_CUSTOMER_ORDER;

