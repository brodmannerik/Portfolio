import React, { createContext, useContext, useState } from "react";

const HeaderTextContext = createContext();

export function useHeaderText() {
  return useContext(HeaderTextContext);
}
export function HeaderTextProvider({ children }) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <HeaderTextContext.Provider value={{ isCardHovered, setIsCardHovered }}>
      {children}
    </HeaderTextContext.Provider>
  );
}
