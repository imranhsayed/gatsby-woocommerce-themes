import React from "react";
import Layout from "../components/layout";
import CheckoutForm from "../components/checkout/checkout-form";

const Checkout = () => (
  <Layout>
    <div className="container my-5">
      <h1 className="mt-5 mb-4">Checkout Page.</h1>
      <CheckoutForm />
    </div>
  </Layout>
);

export default Checkout;
