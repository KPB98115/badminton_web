import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const Context = createContext();

// Create a custom hook for convenience
export const useContextProvider = () => useContext(Context);

// Create Provider Component
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Context.Provider value={screenWidth}>
      {children}
    </Context.Provider>
  );
};