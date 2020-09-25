/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from "react";

import { useDonation } from "../hooks/useDonation";

declare let window: Window & typeof globalThis & { paypal: any };

const Donation: React.FC = () => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(false);

  const { options } = useDonation();

  const paypalRef = useRef(null);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (_: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Doação para ajudar um futuro melhor",
                amount: {
                  currency_code: "USD",
                  value: 42.0,
                },
              },
            ],
          });
        },
        onApprove: async (_: any, actions: any) => {
          const order = await actions.order.capture();
          setPaid(true);

          console.log(order);
        },
        onError: (err: boolean) => {
          console.warn(err);

          setError(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  // Default Render
  return (
    <div>
      <h4>{`R$ ${42}`}</h4>
      <div ref={paypalRef} />
    </div>
  );
};

export default Donation;
