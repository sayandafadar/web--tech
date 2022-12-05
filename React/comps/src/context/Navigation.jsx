import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function Provider({ children }) {
  const [currentPath, setCurrenetPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrenetPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrenetPath(to);
  };

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );
}

export { Provider };
export default NavigationContext;
