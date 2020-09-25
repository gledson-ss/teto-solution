import React, { createContext, useContext, useState } from "react";

interface DonationOptions {
  value: number;
}

interface DonationData {
  options: DonationOptions | null;
  setOptions: React.Dispatch<React.SetStateAction<DonationOptions | null>>;
  setValue: (value: number) => void;
}

const DonationContext = createContext<DonationData>({} as DonationData);

const DonationProvider: React.FC = ({ children }) => {
  const [options, setOptions] = useState<DonationOptions | null>(null);

  function setValue(value: number): void {
    setOptions({ value });
  }

  return (
    <DonationContext.Provider value={{ options, setOptions, setValue }}>
      {children}
    </DonationContext.Provider>
  );
};

function useDonation(): DonationData {
  const context = useContext(DonationContext);

  return context;
}

export { DonationProvider, useDonation };
