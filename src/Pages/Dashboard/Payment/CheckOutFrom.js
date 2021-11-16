import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth.js";

const CheckOutFrom = ({ appointments }) => {
  const { price, patientName, _id } = appointments;
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [success, setsuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setclientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setclientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setsuccess("");
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    //Payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setsuccess("");
    } else {
      setError("");
      setsuccess("Your Payment processed Successfully");
      setProcessing(false);
      //save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transection: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `http://localhost:5000/appointments/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress></CircularProgress>
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay ${price}
          </button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default CheckOutFrom;
