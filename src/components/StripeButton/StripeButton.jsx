import StripeCheckout from "react-stripe-checkout";
import { stripeKey } from "./../../keys";

const StripeCheckoutButton = ({ price }) => {
  const priceInCentsForStripe = price * 100;

  const publishableKey = stripeKey;

  const onSubmit = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      description={`Your price is $${price}`}
      amount={price}
      panelLabel="Pay Now"
      token={onSubmit}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
