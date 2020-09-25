/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from "react";

import ShowCupomModal from "./ShowCupomModal";

declare let window: Window & typeof globalThis & { paypal: any };

interface DonationProps {
  value: number;
}

const Donation: React.FC<DonationProps> = ({ value }) => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(false);

  const paypalRef = useRef(null);

  function handleClose(): void {
    setPaid(false);
  }

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (_: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Doação para ajudar um futuro melhor",
                amount: {
                  currency_code: "BRL",
                  value,
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
  }, [value]);

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  // Default Render
  return (
    <div>
      {paid ? <div>Payment successful.!</div> : <div ref={paypalRef} />}
      <ShowCupomModal
        isOpen={paid}
        onClose={handleClose}
        cupom={`TETO${value}`}
        discount={`${value}`}
      />
    </div>
  );
};

export default Donation;
