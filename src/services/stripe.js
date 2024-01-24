import { loadStripe } from "@stripe/stripe-js";

export const stripe = await loadStripe(
  process.env.REACT_APP_STRPE_API_PUBLISHABLE_KEY
);
// TODO see docs: https://stripe.com/docs/js/elements_object
