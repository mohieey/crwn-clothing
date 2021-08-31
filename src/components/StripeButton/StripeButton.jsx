import StripeCheckout from "react-stripe-checkout";
import { stripeKey } from "./../../keys";

const StripeCheckoutButton = ({ price }) => {
  const priceInCentsForStripe = price * 100;

  const publishableKey = process.env.STRIPE_KEY || stripeKey;

  const onSubmit = (token) => {};
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      description={`Your price is $${price}`}
      amount={priceInCentsForStripe}
      panelLabel="Pay Now"
      token={onSubmit}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
