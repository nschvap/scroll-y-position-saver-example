import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext();

export default function ScrollContextProvider({ children }) {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  return (
    <ScrollContext.Provider
      value={{
        scrollYPosition,
        setScrollYPosition,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
