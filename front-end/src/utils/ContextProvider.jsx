import ContextData from "./Context";
import { useState } from "react";

const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(null); // getting data of user to use from any component

  return (
    <ContextData.Provider value={{ user, setUser }}>
      {children}
    </ContextData.Provider>
  );
};

export default ContextProvider;






