import React, { useEffect, useState, useRef } from "react";

declare var window: Window & typeof globalThis & { paypal: any };

export interface DonationProps {
  donation: {
    donationType: string;
    donor: {
      name: string;
      email: string;
      number: string;
      birthday: string;
    };
    payment: {
      cpf: string;
      value: number;
    };
  };
}

const Donation: React.FC<DonationProps> = ({ donation }) => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(false);

  const paypalRef = useRef(null);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: donation.donor.name,
                amount: {
                  currency_code: "USD",
                  value: donation.payment.value,
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (error: boolean) => {
          setError(error);
          console.error(error);
        },
      })
      .render(paypalRef.current);
  }, [donation.donor.name, donation.payment.value]);

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
      <h4>${donation.payment.value} /-</h4>
      <div ref={paypalRef} />
    </div>
  );
};

export default Donation;
