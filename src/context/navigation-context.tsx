import React, { createContext, useState } from "react";

interface NavigationContextProps {
  isOpenSidebar: boolean;
  handleCloseSidebar: () => void;
}

export const NavigationContext = createContext<NavigationContextProps>(null!);

const NavigationContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleCloseSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <NavigationContext.Provider value={{ isOpenSidebar, handleCloseSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
