import React, { createContext, useState } from 'react';

// Create context
export const TotalAmountContext = createContext();

// Create provider component
export const TotalAmountProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedSpecialists, setSelectedSpecialists] = useState({});

  return (
    <TotalAmountContext.Provider value={{ totalAmount, setTotalAmount, selectedSpecialists, setSelectedSpecialists  }}>
      {children}
    </TotalAmountContext.Provider>
  );
};
