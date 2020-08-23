import React from "react";
import { useQuery } from "@apollo/client";
import GET_CUSTOMER_ORDER from "../../../queries/get-customer-orders";
import { isEmpty } from "lodash";
import { getFormattedDate } from "../../../utils/functions";

const Orders = ({ authData }) => {
  const {
    user: { id },
  } = authData;

  // Get Cart Data.
  const { data } = useQuery(GET_CUSTOMER_ORDER, {
    variables: {
      id: id,
    },
  });

  if (isEmpty(data)) {
    return null;
  }

  console.warn("data", data);
  const {
    customer: { orders },
  } = data;

  return (
    <div className="">
      {!isEmpty(orders)
        ? orders.edges.map((order) => {
            return (
              <div className="" key={order.node.orderId}>
                <div className="card-header">
                  <h4>Order #{order.node.orderId}</h4>
                  <time>Order Placed: {getFormattedDate(order.node.date)}</time>
                  <div>Payment Method: {order.node.paymentMethodTitle}</div>
                  <div>Order Status: {order.node.status}</div>
                  <div>Total: {order.node.total}</div>
                </div>
                <div className="card-body">
                  {order.node.lineItems.edges.map((item) => {
                    return (
                      <div className="order-item" key={item.node.product.id}>
                        <h5>{item.node.product.name}</h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Orders;
