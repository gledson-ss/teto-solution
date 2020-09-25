import React, { createContext, useContext, useState } from "react";

interface DonationOptions {
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
}

interface DonationData {
  options: DonationOptions;
  setOptions: React.Dispatch<React.SetStateAction<DonationOptions>>;
}

const DonationContext = createContext<DonationData>({} as DonationData);

const DonationProvider: React.FC = ({ children }) => {
  const [options, setOptions] = useState<DonationOptions>(
    {} as DonationOptions,
  );

  return (
    <DonationContext.Provider value={{ options, setOptions }}>
      {children}
    </DonationContext.Provider>
  );
};

function useDonation(): DonationData {
  const context = useContext(DonationContext);

  return context;
}

export { DonationProvider, useDonation };
