"use client";

import React, { useState } from "react";

interface AuthType {
  dark: boolean;
  setDark: any;
}

const defaultVal = {
  dark: false,
  setDark: () => {},
};

export const DarkContext = React.createContext<AuthType>(defaultVal);

export default function useDark() {
  return React.useContext(DarkContext);
}

export const DarkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dark, setDark] = useState(false);

  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkContext.Provider>
  );
};
