import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_GB9XSYX1V22SCkQ7Hme1DEpR00sIYVGJqQ";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce SHOP++ Ltd."
      shippingAddress
      billingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total ${price}$`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
