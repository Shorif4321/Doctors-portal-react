import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import CheckOutFrom from "./CheckOutFrom.js";

const stripePromise = loadStripe(
  "pk_test_51JvmJkJWNeHXvmPgzznO0FNpGuX1vHYvq552UHQRkM8a3zt6qOHVTOLdO7Nh7aA3fbbDfVCq2jwH0J37urqDBX48006YzBYRal"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(
      `https://ancient-reef-35678.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [appointmentId]);

  return (
    <div>
      <h1>
        {" "}
        Please pay for {appointments.patientName} for {appointments.serviceName}
      </h1>
      <h1> Price $ {appointments?.price}</h1>
      {appointments?.price && (
        <Elements stripe={stripePromise}>
          <CheckOutFrom appointments={appointments}></CheckOutFrom>
        </Elements>
      )}
    </div>
  );
};

export default Payment;
