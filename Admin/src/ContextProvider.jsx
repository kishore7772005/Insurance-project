import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [role, setRole] = useState("admin"); // default role

  return (
    <ProductContext.Provider value={{ role, setRole }}>
      {children}
    </ProductContext.Provider>
  );
};
