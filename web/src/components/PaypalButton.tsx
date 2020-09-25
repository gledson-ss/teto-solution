/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from "react";

// import ShowCupomModal from "./ShowCupomModal";

declare let window: Window & typeof globalThis & { paypal: any };

interface DonationProps {
  value: number;
}

const Donation: React.FC<DonationProps> = ({ value }) => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(false);
  // const [isOpen, setOpen] = useState(true);

  const paypalRef = useRef(null);

  // function handleClose(): void {
  //   setOpen(false);
  // }

  // useEffect(() => {
  //   if (paid) {
  //     setOpen(true);
  //   }
  // }, [paid]);

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
      {/* <ShowCupomModal isOpen={isOpen} onClose={handleClose} /> */}
    </div>
  );
};

export default Donation;
